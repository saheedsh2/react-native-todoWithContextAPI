import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ListNotesScreen from "./screens/ListNotesScreen";
import {NotesProvider} from "./src/context/NotesContext";
import CreateNoteScreen from "./screens/CreateNoteScreen";
import ShowNoteScreen from "./screens/ShowNoteScreen";
import EditNoteScreen from "./screens/EditNoteScreen";

const Stack = createNativeStackNavigator();



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="List Notes"
          component={ListNotesScreen}
          options={{
            headerTitleAlign: "center",
            title: "All Notes",
          }}
        />
        <Stack.Screen name="create" 
        component={CreateNoteScreen} 
        options={{
          headerTitleAlign:"center",
          title:"Create A Note"
        }}
        />
             <Stack.Screen name="shownotes" 
        component={ShowNoteScreen} 
        options={{
          headerTitleAlign:"center",
          title:"Notes Details"
        }}
        />
      <Stack.Screen name="editnotes" 
        component={EditNoteScreen} 
        options={{
          headerTitleAlign:"center",
          title:"Update Notes"
        }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default () => {
  return (
    <NotesProvider>
      <App />
    </NotesProvider>
  );
};
