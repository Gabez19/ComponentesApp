import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Button,
  Image,
  Modal,
  ActivityIndicator,
  FlatList,
  SectionList,
  SafeAreaView, // Importa SafeAreaView
  StatusBar,
  Switch,
  TouchableOpacity,
  Alert,
} from 'react-native';

// Este é o componente principal da sua aplicação.
// Ele demonstra o uso de vários componentes do React Native.
export default function App() {
  const [textInput, setTextInput] = useState('');
  const [isModalVisible, setModalVisible] = useState(false);
  const [isSwitchEnabled, setSwitchEnabled] = useState(false);

  // Dados para a FlatList
  const flatListData = [
    { key: '1', text: 'Item 1 da FlatList' },
    { key: '2', text: 'Item 2 da FlatList' },
    { key: '3', text: 'Item 3 da FlatList' },
  ];

  // Dados para a SectionList
  const sectionListData = [
    {
      title: 'Grupo A',
      data: ['Item A1', 'Item A2', 'Item A3'],
    },
    {
      title: 'Grupo B',
      data: ['Item B1', 'Item B2', 'Item B3'],
    },
  ];

  return (
    // SafeAreaView garante que o conteúdo não seja sobreposto pela barra de status
    <SafeAreaView style={styles.container}>
      {/* StatusBar: Controla a aparência da barra de status (cor, estilo, visibilidade) */}
      <StatusBar barStyle="dark-content" backgroundColor="#f0f4f7" />

      {/* Título do aplicativo fixo no topo */}
      <Text style={styles.appTitle}>Explorando Componentes</Text>

      {/* ScrollView: Torna o conteúdo da tela rolável se for maior que o espaço disponível */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>

        {/* View e Text */}
        <View style={styles.componentCard}>
          <Text style={styles.cardTitle}>View e Text</Text>
          <Text style={styles.cardDescription}>
            `View` é o bloco de construção fundamental, um contêiner para outros componentes. `Text` exibe texto na tela.
          </Text>
          <View style={styles.exampleView} />
          <Text style={styles.exampleText}>Exemplo de Text</Text>
        </View>

        {/* TextInput */}
        <View style={styles.componentCard}>
          <Text style={styles.cardTitle}>TextInput</Text>
          <Text style={styles.cardDescription}>
            Componente para entrada de texto pelo usuário.
          </Text>
          <TextInput
            style={styles.textInput}
            placeholder="Digite algo aqui..."
            onChangeText={setTextInput}
            value={textInput}
          />
        </View>

        {/* Button, Alert, e TouchableOpacity */}
        <View style={styles.componentCard}>
          <Text style={styles.cardTitle}>Button, Alert e TouchableOpacity</Text>
          <Text style={styles.cardDescription}>
            `Button` é um botão básico. `Alert` é uma API para exibir caixas de diálogo. `TouchableOpacity` é um wrapper para tornar um componente clicável, com feedback visual.
          </Text>
          <Button
            title="Mostrar Alerta"
            onPress={() => Alert.alert('Alerta!', 'Você clicou no botão.')}
          />
          <TouchableOpacity
            style={styles.touchableButton}
            onPress={() => Alert.alert('Alerta!', 'Você clicou no TouchableOpacity.')}
          >
            <Text style={styles.touchableButtonText}>TouchableOpacity</Text>
          </TouchableOpacity>
        </View>

        {/* Image e Modal */}
        <View style={styles.componentCard}>
          <Text style={styles.cardTitle}>Image e Modal</Text>
          <Text style={styles.cardDescription}>
            `Image` exibe imagens. `Modal` cria um pop-up que sobrepõe a tela.
          </Text>
          <Image
            source={{ uri: 'https://placehold.co/100x100/A5C9A5/FFFFFF?text=Image' }}
            style={styles.image}
          />
          <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(!isModalVisible)}
        >
          <View style={styles.modalView}>
            <View style={styles.modalContent}>
              <Text style={styles.modalText}>Este é um Modal!</Text>
              <Button title="Fechar" onPress={() => setModalVisible(!isModalVisible)} />
            </View>
          </View>
        </Modal>

        {/* ActivityIndicator e Switch */}
        <View style={styles.componentCard}>
          <Text style={styles.cardTitle}>ActivityIndicator e Switch</Text>
          <Text style={styles.cardDescription}>
            `ActivityIndicator` exibe um círculo de carregamento. `Switch` é um botão de alternância.
          </Text>
          <ActivityIndicator size="large" color="#0000ff" style={styles.activityIndicator} />
          <Switch
            trackColor={{ false: '#767577', true: '#81b0ff' }}
            thumbColor={isSwitchEnabled ? '#f5dd4b' : '#f4f3f4'}
            onValueChange={() => setSwitchEnabled(!isSwitchEnabled)}
            value={isSwitchEnabled}
            style={styles.switch}
          />
        </View>

        {/* FlatList */}
        <View style={styles.componentCard}>
          <Text style={styles.cardTitle}>FlatList</Text>
          <Text style={styles.cardDescription}>
            Para renderizar listas de dados grandes de forma eficiente.
          </Text>
          <FlatList
            data={flatListData}
            renderItem={({ item }) => <Text style={styles.listItem}>{item.text}</Text>}
            keyExtractor={(item) => item.key}
            style={styles.list}
            scrollEnabled={false} // Desabilita a rolagem da FlatList
          />
        </View>

        {/* SectionList */}
        <View style={styles.componentCard}>
          <Text style={styles.cardTitle}>SectionList</Text>
          <Text style={styles.cardDescription}>
            Similar à `FlatList`, mas para dados agrupados em seções.
          </Text>
          <SectionList
            sections={sectionListData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => <Text style={styles.listItem}>{item}</Text>}
            renderSectionHeader={({ section: { title } }) => (
              <Text style={styles.sectionHeader}>{title}</Text>
            )}
            style={styles.list}
            scrollEnabled={false} // Desabilita a rolagem da SectionList
          />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
  },
  scrollViewContent: {
    paddingVertical: 20,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1E90FF',
    textAlign: 'center',
    marginBottom: 25,
  },
  componentCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 20,
    marginHorizontal: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  cardDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 15,
  },
  exampleView: {
    width: 50,
    height: 50,
    backgroundColor: '#FF6347',
    borderRadius: 8,
    alignSelf: 'center',
    marginBottom: 10,
  },
  exampleText: {
    fontSize: 16,
    color: '#333',
    textAlign: 'center',
  },
  textInput: {
    height: 45,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
  },
  touchableButton: {
    backgroundColor: '#3CB371',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  touchableButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 15,
  },
  activityIndicator: {
    marginBottom: 15,
  },
  switch: {
    alignSelf: 'center',
  },
  list: {
    marginTop: 10,
  },
  listItem: {
    padding: 10,
    backgroundColor: '#eef',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  modalView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});
