import React,{useState} from "react";
import {View,Text, TextInput, StyleSheet, Pressable} from "react-native"
import { Button } from "react-native-elements";

const Suggestion=()=>{
    const [input,setinput] =useState('')
    const options = ['suggestion1','suggestion2','suggestion3','suggestion4','suggestion5']
    const [selectedOption, setSelectedOption] = useState(null);
    const [show,setshow] = useState(false)

    const handlePress = (item) => {
        setinput(item);
        setSelectedOption(item);
      };
    
    const display=()=>{
        setshow(!show)

    }
    return(
        <View style={styles.container}>
            <Text style={{fontSize:25,color:'black',marginBottom:20}}>Consultation</Text>
            <Text style={{fontSize:15,color:'black',marginBottom:10}}>Cheif Complaints</Text>
            <TextInput style={styles.input} placeholder="Suggestion" onChangeText={setinput} value={input}/>
            <Text style={{fontSize:15,color:'black',marginBottom:10,marginTop:15}}>Suggestion</Text>
            <View style={{flexDirection:'row',flexWrap: 'wrap',marginBottom:10}}>
            {options.map((item)=>(
                <Pressable key={item} style={[
                    styles.button,
                    selectedOption === item &&item===input && { backgroundColor: "#378efa" }, 
                  ]} onPress={()=>handlePress(item)}>
                    <Text style={[styles.text,
                    selectedOption === item && item===input && { color: "white" },
                    ]}>{item}</Text>
                </Pressable>
            ))}
            </View>
            <Button title="Save" onPress={()=>display()} style={styles.save}/>
            {show && input && (
                <View>
                    <Text>{input}</Text>
                </View>
            )}
        </View>
    )

}
const styles = StyleSheet.create({
    container:{
        padding:20,
        backgroundColor:'#ffff'
    },
    input: {
        height: 40,
       
        padding: 10,
        backgroundColor:  '#f2f2f2'
      },
    button:{
        backgroundColor:'#f2f2f2',
        padding:12,
        
        margin:10,
        borderRadius:19
    },
    text:{
        color:'#378efa'

    },
    
})
export default Suggestion;