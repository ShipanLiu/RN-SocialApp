import React, {useRef} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity} from 'react-native';
import PDFScanner from '@woonivers/react-native-document-scanner';

export default function DocScanner(props) {
  const pdfScannerElement = useRef();
  function handleOnPress() {
    pdfScannerElement.current.capture();
  }
  return (
    <View>
      <PDFScanner
        ref={pdfScannerElement}
        style={styles.scanner}
        // onPictureTaken={handleOnPictureTaken}
        overlayColor="rgba(255,130,0, 0.7)"
        enableTorch={false}
        quality={0.5}
        detectionCountBeforeCapture={5}
        detectionRefreshRateInMS={50}
      />
      <TouchableOpacity onPress={handleOnPress} style={styles.button}>
        <Text style={styles.buttonText}>Take picture</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  scanner: {flex: 1},
  button: {alignSelf: 'center', position: 'absolute', bottom: 32},
  buttonText: {backgroundColor: 'rgba(245, 252, 255, 0.7)', fontSize: 32},
});
