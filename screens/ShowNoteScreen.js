import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { NotesContext } from '../src/context/NotesContext'
import { Feather } from "@expo/vector-icons";



const ShowNoteScreen = ({route,navigation}) => {
    const {id} = route.params || {};
    const {state} = useContext(NotesContext)

    const note = state.find((record) => {
        return record.id === id
    }) 

    
  return (
    <View style={{flex:1, marginTop:10}}>
         <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            marginVertical: 10,
            backgroundColor: "green",
            width: 60,
            height: 60,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
          onPress={() => navigation.navigate("editnotes",{id})}
        >
          <Feather name="edit" size={30} color="white" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>{note.title}</Text>
      <Text style={styles.content}>{note.content}</Text>

    </View>
  )
}

export default ShowNoteScreen

const styles = StyleSheet.create({
    title:{
        fontSize: 20,
        textAlign: "center",
        marginVertical: 13
    },
    content:{
        fontSize: 17,
        padding: 12,
    }
})