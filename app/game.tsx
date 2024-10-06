import { View, StyleSheet, Text } from 'react-native'

const Game = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>ゲーム画面</Text>
    </View>
  )
}

export default Game

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
})
