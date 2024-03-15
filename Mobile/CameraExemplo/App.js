import React, { useEffect, useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  Image,
} from "react-native";
import { Camera } from "expo-camera";
import * as MediaLibrary from "expo-media-library";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function App() {
  const cameraRef = useRef(null);
  const [openModal, setOpenModal] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [tipoCamera, setTipoCamera] = useState(Camera.Constants.Type.front);
  const [flashMode, setFlashMode] = useState(Camera.Constants.FlashMode.off);
  const [autoFocus, setAutoFocus] = useState(Camera.Constants.AutoFocus.on);

  useEffect(() => {
    (async () => {
      const { status: cameraStatus } =
        await Camera.requestCameraPermissionsAsync();
      const { status: mediaStatus } =
        await MediaLibrary.requestPermissionsAsync();
    })();
  }, []);

  async function CapturePhoto() {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      setPhoto(photo.uri);
      setOpenModal(true);
    }
  }

  async function UploadPhoto() {
    try {
      await MediaLibrary.createAssetAsync(photo);
      alert("Foto Salva Com sucesso");
      clearPhoto();
    } catch (error) {
      console.error("Erro ao processar a foto:", error);
      alert("Não foi possível processar a foto");
    }
  }

  function Clearphoto() {
    setPhoto(null);
    setOpenModal(false);
  }

  const toggleFlashMode = () => {
    setFlashMode(
      flashMode === Camera.Constants.FlashMode.off
        ? Camera.Constants.FlashMode.on
        : Camera.Constants.FlashMode.off
    );
  };

  const toggleAutoFocus = () => {
    setAutoFocus(
      autoFocus === Camera.Constants.AutoFocus.on
        ? Camera.Constants.AutoFocus.off
        : Camera.Constants.AutoFocus.on
    );
  };

  return (
    <View style={styles.container}>
      <Camera
        ref={cameraRef}
        type={tipoCamera}
        flashMode={flashMode}
        autoFocus={autoFocus}
        style={styles.camera}
        ratio="16:9"
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() =>
              setTipoCamera(
                tipoCamera === Camera.Constants.Type.front
                  ? Camera.Constants.Type.back
                  : Camera.Constants.Type.front
              )
            }
          >
            <Text style={styles.buttonText}>Trocar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleFlashMode}>
            <Text style={styles.buttonText}>
              {flashMode === Camera.Constants.FlashMode.off
                ? "Flash Off"
                : "Flash On"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={toggleAutoFocus}>
            <Text style={styles.buttonText}>
              {autoFocus === Camera.Constants.AutoFocus.on
                ? "Auto Focus Off"
                : "Auto Focus On"}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.buttonCapiture} onPress={CapturePhoto}>
          <FontAwesome name="camera" size={23} color="#FFF" />
        </TouchableOpacity>
      </Camera>

      <Modal animationType="slide" transparent={false} visible={openModal}>
        <View style={styles.modalContainer}>
          <Image style={styles.modalImage} source={{ uri: photo }} />
          <View style={styles.modalButtonsContainer}>

            <TouchableOpacity style={styles.modalButton} onPress={Clearphoto}>
              <AntDesign name="closecircle" size={23} color="#FF000" />
              <Text style={styles.modalButtonText}>Descartar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.modalButton} onPress={UploadPhoto}>
              <AntDesign name="upload" size={23} color="#121212" />
              <Text style={styles.modalButtonText}>Enviar</Text>
            </TouchableOpacity>
            
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  camera: {
    flex: 1,
    width: "100%",
  },
  buttonContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
  },
  button: {
    padding: 20,
    backgroundColor: "transparent",
    borderRadius: 10,
    marginTop: 700,
  },
  buttonCapiture: {
    padding: 20,
    borderRadius: 10,
    marginTop: 680,

    backgroundColor: "rgba(0, 0, 0, 0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  modalImage: {
    width: "100%",
    height: "80%",
    borderRadius: 15,
    marginBottom: 20,
  },
  modalButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 10,
    borderRadius: 10,
  },
  modalButtonText: {
    color: "#FFF",
    fontSize: 16,
    marginLeft: 10,
  },
});
