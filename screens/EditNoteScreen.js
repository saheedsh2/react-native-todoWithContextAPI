import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { NotesContext } from '../src/context/NotesContext';

const EditNoteScreen = ({navigation,route}) => {

  const {state, dispatch} = useContext(NotesContext);



 

  const {id} = route?.params || {};

        const particularNote = state.find((record) => {
            return record.id === id
        })

        const [title, setTitle] = useState(particularNote.title);
        const [content, setContent] = useState(particularNote.content);



  return (
    <View style={{flex:1, margin:8}}>
        
        
      <Text style={{fontSize:22}}>EditNoteScreen</Text>
      <Text style={{fontSize:22}}>Update Title</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(text) => setTitle(text)}
      placeholder="Enter Title"
      value={title}

      />
      <Text style={{fontSize:22}}>Update Content</Text>
        <TextInput 
        style={styles.input}
      onChangeText={(text) => setContent(text)}
      value={content}
      placeholder="Enter Title"
      numberOfLines={3}
      multiline={true}

      />
      <View>
        <TouchableOpacity
        style={{backgroundColor: 'green', padding: 12, borderRadius: 10
      }}
        onPress={() => {
          dispatch({type:"UPDATE",payload:{id,title,content}})
          navigation.navigate("List Notes")
      }}
        >
          <Text style={{fontSize:22, color: "white", textAlign:'center'}}
          
          >Update Note</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default EditNoteScreen

const styles = StyleSheet.create({
  input:{
    fontSize:20,
    borderWidth:1,
    borderColor: 'grey',
    marginVertical:8,
    borderRadius: 5,
    padding: 8
  }
})