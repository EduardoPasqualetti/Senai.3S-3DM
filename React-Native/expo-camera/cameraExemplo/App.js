
import { Camera, CameraType, FlashMode } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useRef, useState } from 'react';
import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import * as MediaLibrary from 'expo-media-library'
import { Ionicons } from '@expo/vector-icons';


export default function App() {
  const cameraRef = useRef(null)
  const [photo, setPhoto] = useState(null)
  const [openModal, setOpenModal] = useState(false)
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front)
  const [flashOn, setFlashOn] = useState(Camera.Constants.FlashMode.off);
  const [gravandoVideo, setGravandoVideo] = useState(false);

  const toggleVideoRecording = async () => {
    if (gravandoVideo) {
      await cameraRef.current.stopRecording();
    } else {
      const videoRecordPromise = cameraRef.current.recordAsync();
      if (videoRecordPromise) {
        setGravandoVideo(true);
      }
    }
  };

  async function CapturePhoto() {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync()
      setPhoto(photo.uri)

      setOpenModal(true)

      console.log(photo);
    }
  }

  function ClearPhoto() {
    setPhoto(null)

    setOpenModal(false)
  }

  async function SavePhoto() {
    if (photo) {
      await MediaLibrary.createAssetAsync(photo)
        .then(() => {
          alert("Sucesso", "Foto salva na galeria")
        }).catch(error => {
          alert("Erro ao processar foto")
        })
    }
  }


  useEffect(() => {
    (async () => {
      const { status: cameraStatus } = await Camera.requestCameraPermissionsAsync()

      const { status: mediaStatus } = await MediaLibrary.requestPermissionsAsync()
    })();
  }, [])

  return (
    <View style={styles.container}>

      <Camera
        ref={cameraRef}
        type={tipoCamera}
        style={styles.camera}
        flashMode={flashOn}
      >
      <View style={styles.box}>
        <TouchableOpacity style={styles.btnFlash} onPress={() => setFlashOn(flashOn == FlashMode.on ? FlashMode.off : FlashMode.on)}>
          <Ionicons name={flashOn === FlashMode.on ? "flash" : "flash-off"} size={42} color={flashOn === FlashMode.on ? "yellow" : "white"} />
        </TouchableOpacity>


        <TouchableOpacity style={styles.btnCaptura} onPress={ () => gravandoVideo ? toggleVideoRecording() : CapturePhoto()}>
          <View style={styles.viewCamera}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnFlip} onPress={() => setTipoCamera(tipoCamera == CameraType.front ? CameraType.back : CameraType.front)}>
          <FontAwesome6 name="camera-rotate" size={45} color="white" />
        </TouchableOpacity>
      </View>
      </Camera>







      <Modal
        animationType='slide'
        transparent={false}
        visible={openModal}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 30 }}>
          <Image
            style={{ width: '100%', height: 500, borderRadius: 10 }}
            source={{ uri: photo }}
          />

          <View style={{ margin: 15, flexDirection: 'row'}}>
            <TouchableOpacity style={styles.btnCancel} onPress={() => ClearPhoto()}>
              <FontAwesome name='trash' size={40} color={'#ff0000'} />
            </TouchableOpacity>

            <TouchableOpacity style={styles.btnUpload} onPress={() => SavePhoto()}>
              <FontAwesome name='save' size={35} color={'#121212'} />
            </TouchableOpacity>
          </View>

        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
    height: '80%',
    width: '100%',
  },
  viewFlip: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  btnFlip: {

    padding: 20,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtFlip: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff'
  },
  btnCaptura: {
    width: 75,
    height: 75,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: '#fff',
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btnFlash:{
    padding: 20,
    borderRadius: 10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  box: {
    flexDirection: 'row',
    gap: 55,
    paddingLeft: 15,
    height: 108,
    backgroundColor: 'transparent',
    marginTop: 720,
  },
  btnCancel: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  },

  btnUpload: {
    padding: 20,
    borderRadius: 15,
    backgroundColor: 'transparent',

    alignItems: 'center',
    justifyContent: 'center'
  },
  viewCamera: {
    width: '100%',
    height: '100%',
    borderWidth: 3,
    borderColor: 'black',
    borderRadius: 40,
    backgroundColor: '#FFF'
  }

});
