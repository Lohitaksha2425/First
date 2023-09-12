import React, {useState} from "react";
import { View, Text, TextInput, StyleSheet, FlatList, Touchable, TouchableOpacity ,Modal, Button} from "react-native";
import DatePicker from "react-native-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { addDetails, detailsReducer } from "./redux/reducer";

const Header=()=>{
    const detailsSelector = useSelector(state=>state.details.details)
    console.log('-------data',detailsSelector);
    const dispatch = useDispatch()
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');
    const [datee, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)
  const [dat,setdat] =useState('')
  const [specialisation,setSpecialisation] = useState('');
  const [experience, setExperience] = useState('');
  const [med,setMed] = useState('');
  const [visible,setvisible] = useState(false)
  const datalist = ['A','B','C']
  const [show,setshow] = useState(false)
  const [submitdata,setsubmit] = useState(null)

  const select=(item)=>{
    setSpecialisation(item)
    setvisible(!visible)
  }
  const display=()=>{
    const submitdata = {
        name,gender,dat,specialisation,experience,med
    }
    dispatch(addDetails.addDetails([...detailsSelector,submitdata]))
    setsubmit(submitdata)
    setshow(!show)
    setName('')
    setGender('')
    setdat('')
    setExperience('')
    setSpecialisation('')
    setMed('')
  }

    const handleNameChange = (text) => {
        setName(text);
    };
    const handleGenderChange = (text) => {
        setGender(text);
      };
    return(
        <View style={styles.container}>
          <Text style={styles.text}>Name</Text>
            <TextInput
              style={styles.input}
              placeholder="Name"
              onChangeText={handleNameChange}
              value={name}
            />
            <Text style={styles.text}>Gender</Text>
            <TextInput
              style={styles.input}
              placeholder="Gender"
              onChangeText={setGender}
              value={gender}
            />
            <Text style={styles.text}>Date of Birth</Text>
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              value={dat}
              onPressIn={() => setOpen(true)}
            />
            <DatePicker
        modal
        open={open}
        date={datee}
        onConfirm={(date) => {
          setOpen(false)
          setDate(date)
          setdat(datee.toLocaleDateString())
        }}
        onCancel={() => {
          setOpen(false)
        }}
      />
      <Text style={styles.text}>Specialisation</Text>
            <TextInput
              style={styles.input}
              placeholder="Specialisation"
              value={specialisation}
              onPressIn={()=>setvisible(!visible)}
            />
            <Modal
        animationType="slide"
        transparent={false}
        visible={visible}
        onRequestClose={() => {
          
          setvisible(!visible);
        }}>
            <View>
                <FlatList data={datalist} renderItem={({item})=> (
                    <View>
                        <TouchableOpacity onPress={()=>select(item)}>
                            <Text>{item}</Text>
                        </TouchableOpacity>
                        </View>
    )}
    keyExtractor={(item)=>item}/>
    <TouchableOpacity onPress={()=>setvisible(!visible)}>
        <Text>close</Text>
    </TouchableOpacity>
            </View>

        </Modal>
            <Text style={styles.text}>Experience</Text>
            <TextInput
              style={styles.input}
              placeholder="How many years of experience?"
              onChangeText={setExperience}
              value={experience}
            />
            <Text style={styles.text}>Medical Number</Text>
            <TextInput
              style={styles.input}
              placeholder="Medical Number"
              onChangeText={setMed}
              value={med}
            />
            <Button 
              title="Next"
              color= "#4BA5FA"
              onPress={() => display()}
          />
          {submitdata && show && (
            <View>
                <Text>Name: {submitdata.name}</Text>
                <Text>{submitdata.gender}</Text>
                <Text>{submitdata.dat}</Text>
                <Text>{submitdata.specialisation}</Text>
                <Text>{submitdata.experience}</Text>
                <Text>{submitdata.med}</Text>
                </View>
          )}

       

         
          
        </View>
    )
};

const styles = StyleSheet.create({
    text:{
        marginBottom: 10
    },
    label: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 21.79,
    },
    container: {
      margin: 20
    },
    input: {
      borderWidth: 1,
      padding: 10,
      backgroundColor: '#F4F7FF'
    },

    label2: {
      fontFamily: "Open Sans",
      fontWeight: 400,
      fontSize: 16,
      lineHeight: 21.79,
    },
    container2: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 16,
      borderRadius: 4,
    },
    input2: {
      width: '100%',
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 5,
      marginTop: 43,
      fontSize: 16,
    },

  });
  
  export default Header;