import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState, useContext } from 'react'
import { NotesContext } from '../src/context/NotesContext';

const CreateNoteScreen = ({navigation}) => {

  const {state, dispatch} = useContext(NotesContext);



  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  return (
    <View style={{flex:1, margin:8}}>
      <Text style={{fontSize:22}}>CreateNoteScreen</Text>
      <TextInput 
      style={styles.input}
      onChangeText={(text) => setTitle(text)}
      placeholder="Enter Title"
      value={title}

      />
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
          dispatch({type:"ADD",payload:{title,content}})
          navigation.goBack()
      }}
        >
          <Text style={{fontSize:22, color: "white", textAlign:'center'}}
          
          >Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default CreateNoteScreen

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