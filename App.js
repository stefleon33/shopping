// import react Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// import the screens
import ShoppingLists from './components/ShoppingLists';
import Welcome from './components/Welcome';

const App = () => {
const firebaseConfig = {
  apiKey: "AIzaSyBFZpYiEeeHFWf5146O88aoV_0wXuf_m7E",
  authDomain: "shopping-list-demo-c67b3.firebaseapp.com",
  projectId: "shopping-list-demo-c67b3",
  storageBucket: "shopping-list-demo-c67b3.appspot.com",
  messagingSenderId: "648476402064",
  appId: "1:648476402064:web:bdbfdf02624bbceb555315"
};

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
        <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
      >
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen
          name="ShoppingLists"
        >
          {props => <ShoppingLists db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;