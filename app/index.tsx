import { Text, View, StyleSheet } from 'react-native'
import { Link } from 'expo-router'

const Index = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>テトリスクエスト</Text>
      <Link href="/game" style={styles.button}>
        ゲームを開始する
      </Link>
    </View>
  )
}

export default Index

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
  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
})
