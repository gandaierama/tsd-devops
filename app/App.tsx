import React, { useState, setState, useEffect, useRef } from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInputMask } from "react-native-masked-text";
import * as Location from "expo-location";
import MapView, { Marker } from "react-native-maps";
import OneSignal from "react-native-onesignal";
import Speed from "./components/Speed";
import HeaderHome from "./components/HeaderHome";
import HeaderPages from "./components/HeaderPages";
import HeaderDash from "./components/HeaderDash";
import Constants from "expo-constants";

import {
  Pressable,
  Vibration,
  ScrollView,
  Image,
  PermissionsAndroid,
  Dimensions,
  SafeAreaView,
  Alert,
  TextInput,
  ImageBackground,
  StyleSheet,
  View,
  AsyncStorage,
  Animated,
  AppState,
  Share,
  ToastAndroid
} from "react-native";

import {
  Divider,
  Input,
  Card,
  Dialog,
  ListItem,
  Header as HeaderRNE,
  HeaderProps,
  Icon,
  Button,
  Text,
  Switch
} from "react-native-elements";


const Stack = createNativeStackNavigator();
const baseUrl = "http://api.tsdmotoboys.com.br/";

//////////////Animation

const fadeAnim = useRef(new Animated.Value(0)).current;

  const fadeIn = () => {
    // Will change fadeAnim value to 1 in 5 seconds
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 5000
    }).start();
  };

  const fadeOut = () => {
    // Will change fadeAnim value to 0 in 3 seconds
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 3000
    }).start();
  };

  // const showToast = (text) => {
  //   ToastAndroid.show(text);
  // };

  // const showToastWithGravity = (text) => {
  //   ToastAndroid.showWithGravity(
  //     text,
  //     ToastAndroid.SHORT,
  //     ToastAndroid.CENTER
  //   );
  // };

  // const showToastWithGravityAndOffset = (text) => {
  //   ToastAndroid.showWithGravityAndOffset(
  //     text,
  //     ToastAndroid.LONG,
  //     ToastAndroid.BOTTOM,
  //     25,
  //     50
  //   );
  // };
  // const createAlert = ({title, message}) =>
  //   Alert.alert(
  //     title,
  //     message
  //   );


  const LoadView = ()=> {


    <Animated.View
        style={[
          styles.fadingContainer,
          {
            // Bind opacity to animated value
            opacity: fadeAnim
          }
        ]}
      >
        <Text style={styles.fadingText}>Fading View!</Text>
      </Animated.View>
  }


  const ShareBase = () => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'React Native | A framework for building native apps using React',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={{ marginTop: 50 }}>
      <Button onPress={onShare} title="Share" />
    </View>
  );
};


  const AppStateView = () => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);

  useEffect(() => {
    const subscription = AppState.addEventListener("change", nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === "active"
      ) {
        console.log("App has come to the foreground!");
      }

      appState.current = nextAppState;
      setAppStateVisible(appState.current);
      console.log("AppState", appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Current state is: {appStateVisible}</Text>
    </View>
  );
};
//////////////ONESIGNAL
function initOneSignalClient() {
  //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  OneSignal.setAppId(Constants.manifest?.extra?.oneSignalAppId);

  //Prompt for push on iOS
  OneSignal.promptForPushNotificationsWithUserResponse((response) => {
    console.log("Prompt response:", response);
  });

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(
    (notificationReceivedEvent) => {
      console.log(
        "OneSignal: notification will show in foreground:",
        notificationReceivedEvent
      );
      let notification = notificationReceivedEvent.getNotification();
      console.log("notification: ", notification);
      const data = notification.additionalData;
      console.log("additionalData: ", data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    }
  );

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler((notification) => {
    console.log("OneSignal: notification opened:", notification);
  });
}
initOneSignalClient();
/////////////////////////////////


const ViewBase =({children})=>{
 return(
  <View>
      <HeaderPages title="Iniciar Entrega" />
      <View
        className={styles.view1}
      >
        <View
          className={styles.view2}
        >
          <ScrollView>
            {children}

          </ScrollView>
            }
        </View>
      </View>
    </View>
    );
}

const DashMotoScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [text2, setText2] = useState(null);
  const [open, setOpen] = useState(null);
  const [text, setText] = useState(null);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(true);
  const [time, setTime] = useState(Date.now());
  const [counter, setCounter] = useState(0);

  let markers = [];
  let numberVar = 0;

  function toggle() {
    setIsActive(!isActive);
  }

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //reset counter
  const reset = () => {
    setCounter(0);
  };

  const [region, setRegion] = useState(null);

  const regionFrom = (lat, lon, accuracy) => {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = accuracy / oneDegreeOfLongitudeInMeters;

    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta: Math.max(0, latDelta),
      longitudeDelta: Math.max(0, lonDelta),
    };
  };

  const onRegionChange = (region) => {
    console.log(region);
    setRegion(region);
  };

  const mudar = async () => {
    setTime(Date.now());
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }
    let location1 = await Location.getCurrentPositionAsync({});
    setLocation(location1);

    increase();

    if (counter > 3) {
      setText("enviado");
      reset();
    } else {
      setText("Esperando");
    }

    let lat = location1.coords.latitude;
    let lon = location1.coords.longitude;
    let accuracy = location1.coords.accuracy;
    markers.push({ latitude: lat, longitude: lon });
    console.log(markers);
    let reg = regionFrom(Number(lat), Number(lon), accuracy);
    setRegion(reg);
  };

  useEffect(() => {
    const interval = setInterval(() => mudar(), 1000);
    console.log(region);
    return () => {
      clearInterval(interval);
    };
  }, []);

  let locationS = JSON.stringify(location);

  return (
    <View>
      <HeaderDash navigation={navigation} />
      <View>
        <Text>
          {counter} - {text}
        </Text>
      </View>
      <View style={{ height: "80%", marginTop: 0 }}>
        {region != null && (
          <MapView
            style={styles.map}
            initialRegion={region}
            onRegionChangeComplete={onRegionChange}
            scrollEnabled={false}
            rotateEnabled={false}
            moveOnMarkerPress={true}
            zoomEnabled={false}
            zoomTapEnabled={false}
            zoomControlEnabled={false}
            maxZoomLevel={18}
          >
            <MapView.Marker
              coordinate={{
                latitude: region.latitude,
                longitude: region.longitude,
              }}
              key={1}
              icon={require("./assets/icon1.png")}
              title={"TSD"}
            />
          </MapView>
        )}
      </View>
    </View>
  );
};

const DashClienteScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderPages title="DashBoard Cliente" />
      <View
        className={styles.view1}
      >
        <View
          className={styles.view2}
        >
          <ScrollView></ScrollView>
        </View>
      </View>
    </View>
  );
};

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [senha, setSenha] = useState(null);
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };

  const Login = () => {
    Vibration.vibrate(2 * 1000);
    console.log(email);
    console.log(senha);

    if (email === "" || email === undefined)
      setError("o e-mail precisa ser preenchida");
    if (senha === "" || senha === undefined)
      setError("a senha precisa ser preenchido");

    senhaCrypto = MD5(senha);
    console.log(senhaCrypto);

    _storeData = async () => {
      try {
        await AsyncStorage.setItem(email, senhaCrypto);
      } catch (error) {
        console.log(error);
      }
    };

    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem(email);
        if (value !== null) {
          // We have data!!
          console.log(value);
        }
      } catch (error) {
        console.log(error);
      }
    };
  };
  return (
    <View>
      <HeaderPages title="Login" />
      <View
        className={styles.view1}
      >
        <View
          className={styles.view2}
        >
          <ScrollView>

            <Switch
              value={checked}
              onValueChange={(value) => setChecked(value)}
            />
            <Input
              placeholder="Digite seu email"
              title="E-mail"
              className={styles.input}
              onChangeText={setEmail}
            />
            <Input
              placeholder="Digite sua senha"
              title="Senha"
              className={styles.input}
              onChangeText={setSenha}
            />
            <Button
              title="Entrar"
              onPress={Login}
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />
            <Pressable>
              <Text
                onPress={() => navigation.navigate("Esqueci")}
                style={{ textAlign: "center", marginBottom: 30 }}
              >
                Esqueci a senha
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Cadastro")}>
              <Text style={{ textAlign: "center" }}>Não tem cadastro</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const EsqueciScreen = ({ navigation }) => {

  const [email, setEmail] = useState(null);

  const Lembrar = () => {
    if (email === "" || email === undefined)
      setError("o e-mail precisa ser preenchida");


    Vibration.vibrate(2 * 1000);


    console.log(email);
    console.log(senha);
  };
  return (
    <View>
      <HeaderPages title="Esqueci a senha" />
      <View
        className={styles.view1}
      >
        <View
          className={styles.view2}
        >
          <ScrollView>
            <Input
              placeholder="Digite seu email"
              title="E-mail"
              className={styles.input}
            />
            <Button
              title="Lembrar"
              onPress={Lembrar}
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />
            <Pressable onPress={() => navigation.navigate("Login")}>
              <Text style={{ textAlign: "center", marginBottom: 30 }}>
                Login
              </Text>
            </Pressable>
            <Pressable onPress={() => navigation.navigate("Cadastro")}>
              <Text style={{ textAlign: "center" }}>Não tem cadastro</Text>
            </Pressable>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

const MotoboyScreen = ({ navigation }) => {
  const [sucesso, setSucesso] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [error, setError] = useState("");

  const url = `http://api.tsdmotoboys.com.br/motoboy`;

  async function submitCad(event) {
    event.preventDefault();
    Vibration.vibrate(2 * 1000);
    console.log("foi");

    console.log(nome);

    const valCad = JSON.stringify({
      name: nome,
      email: email,
      senha: senha,
      cpf: cpf,
    });

    try {
      const requestOptions = {
        method: "POST",
        body: valCad,
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      };

      console.log(requestOptions);
      const response = await fetch(url, requestOptions).then((response) =>
        response.json()
      );

      setSucesso(true);
      const res = response;
      createAlert("Cadastro criado com sucesso!", "Parabéns seu cadastro inicial foi concluído, acesse com seu email e senha!" );
      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View>
      <HeaderPages title="Cadastro de Motoboy" />
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            paddingHorizontal: 20,
          }}
        >
          {sucesso === false && (
            <>
              <Input
                onChangeText={setNome}
                placeholder="Digite seu nome"
                className={styles.input}
                name="nome"
                value={nome}
                style={{ width: "100%", marginTop: 50 }}
              />

              <Input
                onChangeText={setCpf}
                name="cpf"
                value={cpf}
                placeholder="Digite seu cpf"
                className={styles.input}
              />

              <Input
                placeholder="Digite seu email"
                name="email"
                value={email}
                onChangeText={setEmail}
                className={styles.input}
              />

              <Input
                placeholder="Digite sua senha"
                name="senha"
                value={senha}
                onChangeText={setSenha}
                className={styles.input}
              />

              <Button
                title="Cadastrar"
                onPress={submitCad}
                buttonStyle={{
                  backgroundColor: "rgba(78, 116, 289, 1)",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 30,
                }}
                type="solid"
              />
            </>
          )}

          {sucesso === true && (
            <>

              <LoadView/>
              <Text>Cadastro efetuado com sucesso!!!</Text>
              <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
                buttonStyle={{
                  backgroundColor: "rgba(78, 116, 289, 1)",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 30,
                }}
                type="solid"
              />
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};
const JobsMotoboyScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};
const BuscaMotoboyScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const ResumoMotoboyScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const IniEntregaScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const FimEntregaScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const EntregaScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};
const ClienteScreen = ({ navigation }) => {
  const url = `http://api.tsdmotoboys.com.br/cliente`;

  const [sucesso, setSucesso] = useState(false);
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [nome, setNome] = useState("");
  const [cnpj, setCnpj] = useState();
  const [error, setError] = useState("");

  async function submitCad(event) {
    event.preventDefault();
    Vibration.vibrate(2 * 1000);


    console.log(nome);

    const valCad = JSON.stringify({
      name: nome,
      email: email,
      senha: senha,
      cnpj: cnpj,
    });

    try {
      const requestOptions = {
        method: "POST",
        body: valCad,
        headers: new Headers({
          "Content-Type": "application/json",
          Accept: "application/json",
        }),
      };

      console.log(requestOptions);
      const response = await fetch(url, requestOptions).then((response) =>
        response.json()
      );

      setSucesso(true);
      const res = response;

      console.log(res);
      return res;
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <View>
      <HeaderPages title="Cadastro de Cliente" />
      <ScrollView>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "70%",
            paddingHorizontal: 20,
            paddingVertical: 30,
          }}
        >
          {sucesso === false && (
            <>
              <Input
                onChangeText={setNome}
                placeholder="Digite seu nome"
                className={styles.input}
                name="nome"
                value={nome}
                style={{ width: "100%", marginTop: 50 }}
              />

              <Input
                onChangeText={setCnpj}
                name="cnpj"
                value={cnpj}
                placeholder="Digite seu cnpj"
                className={styles.input}
              />

              <Input
                placeholder="Digite seu email"
                name="email"
                value={email}
                onChangeText={setEmail}
                className={styles.input}
              />

              <Input
                placeholder="Digite sua senha"
                name="senha"
                value={senha}
                onChangeText={setSenha}
                className={styles.input}
              />

              <Button
                title="Cadastrar"
                onPress={submitCad}
                buttonStyle={{
                  backgroundColor: "rgba(78, 116, 289, 1)",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 30,
                }}
                type="solid"
              />
            </>
          )}

          {sucesso === true && (
            <>
              <LoadView/>
              <Text>Cadastro efetuado com sucesso!!!</Text>

              <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
                buttonStyle={{
                  backgroundColor: "rgba(78, 116, 289, 1)",
                }}
                containerStyle={{
                  width: 200,
                  marginHorizontal: 50,
                  marginVertical: 30,
                }}
                type="solid"
              />
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const ListagemClienteScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const OrdemClienteScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const OcorrenciasClienteScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const ResumoClienteScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const HelpScreen = ({ navigation }) => {
  return (
    <ViewBase></ViewBase>
  );
};

const HomeScreen = ({ navigation }) => {
  return (
    <>
      <View>
        <HeaderHome />
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
        >
          <Button
            title="Cadastrar"
            onPress={() => navigation.navigate("Cadastro")}
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 30,
            }}
            type="solid"
          />

          <Button
            title="Login"
            onPress={() => navigation.navigate("Login")}
            buttonStyle={{
              backgroundColor: "rgba(78, 116, 289, 1)",
            }}
            containerStyle={{
              width: 200,
              marginHorizontal: 50,
              marginVertical: 30,
            }}
            type="solid"
          />

          <ShareBase/>
        </View>
      </View>
      <Speed navigation={navigation} />
    </>
  );
};
const CadastroScreen = ({ navigation }) => {
  return (
    <View>
      <HeaderPages title="Cadastro" />
      <View
        className={styles.view1}
      >
        <View
          className={styles.view2}
        >
          <ScrollView>
            <Button
              title="Motoboy"
              onPress={() => navigation.navigate("Motoboy")}
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />

            <Button
              title="Cliente"
              onPress={() => navigation.navigate("Cliente")}
              buttonStyle={{
                backgroundColor: "rgba(78, 116, 289, 1)",
              }}
              containerStyle={{
                width: 200,
                paddingHorizontal: 20,
                marginHorizontal: 50,
                marginVertical: 30,
              }}
              type="solid"
            />
          </ScrollView>
        </View>
      </View>
    </View>
  );
};
const CadastroClienteScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ImageBackground
        source={require("./assets/tsd.png")}
        resizeMode="cover"
        style={styles.bg}
        imageStyle={{
          resizeMode: "cover",
          height: "120%", // the image height
          top: undefined,
        }}
      >
        <View style={styles.container3}>
          <Image
            source={require("./assets/logo.png")}
            style={{ width: 150, height: 150 }}
          />
        </View>
      </ImageBackground>
      <Text>TSD</Text>
    </View>
  );
};

function App({ navigation }) {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: true }}>
        {/*Páginas públicas*/}
        <Stack.Screen name="Home" title="WELCOME" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Cadastro" component={CadastroScreen} />
        <Stack.Screen name="Cliente" component={ClienteScreen} />
        <Stack.Screen name="Motoboy" component={MotoboyScreen} />
        <Stack.Screen name="Esqueci" component={EsqueciScreen} />

        {/*Páginas privadas motoboy*/}
        <Stack.Screen name="DashboardMotoboy" component={DashMotoScreen} />
        <Stack.Screen name="Iniciar" component={IniEntregaScreen} />
        <Stack.Screen name="Entrega" component={EntregaScreen} />
        <Stack.Screen name="Fim" component={FimEntregaScreen} />
        <Stack.Screen name="Resumo" component={ResumoMotoboyScreen} />
        <Stack.Screen name="Jobs" component={JobsMotoboyScreen} />
        <Stack.Screen name="Busca" component={BuscaMotoboyScreen} />

        {/*Páginas privadas cliente*/}
        <Stack.Screen name="DashboardCliente" component={DashClienteScreen} />
        <Stack.Screen name="ResumoCliente" component={ResumoClienteScreen} />
        <Stack.Screen
          name="ListagemCliente"
          component={ListagemClienteScreen}
        />
        <Stack.Screen name="OrdemCliente" component={OrdemClienteScreen} />
        <Stack.Screen
          name="OcorrenciasCliente"
          component={OcorrenciasClienteScreen}
        />
        <Stack.Screen name="Help" component={HelpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  view1:{
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          minHeight: "100%",
          paddingHorizontal: 20,
        },
  view2:{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
            marginTop: 20,
          },
  debug: {
    fontSize: 11,
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
    height: "55%",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    height: "40%",
  },
  title: {
    color: "#fff",
    fontSize: 20,
  },
  container3: {
    height: "25%",
    width: "100%",
    alignItems: "center",
    alignContent: "space-between",
    color: "#fff",
    justifyContent: "space-between",
  },
  container4: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    width: "100%",
    height: "75%",
  },
  error: {
    color: "red",
    fontSize: 11,
  },
  bg: {
    height: "100%",
    justifyContent: "center",
    width: "100%",
    top: 0,
  },
  title: {
    textAlign: "center",
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: "#737373",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  buttom: {
    padding: 15,
    fontSize: 20,
    color: "#000",
  },
  container: {
    ...StyleSheet.absoluteFillObject,
    alignItems: "center",
    marginTop: 0,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    marginTop: 0,
  },
  input: {
    fontSize: 17,
    margin: 12,
    backgroundColor: "#C4C4C4",
    width: "60vw",
    padding: 15,
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#397af8",
    marginBottom: 20,
    width: "100%",
    paddingVertical: 15,
  },
  heading: {
    color: "white",
    fontSize: 22,
    fontWeight: "bold",
  },
  headerRight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 5,
  },
  subheaderText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  headerWrapper: {
    borderBottomColor: "red",
    borderBottomWidth: 2,
    marginBottom: 30,
  },
});

export default App;
