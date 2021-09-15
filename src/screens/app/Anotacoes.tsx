import React, { useContext, useEffect, useRef, useState } from 'react'
import { StyleSheet, View, TextInput, Pressable } from 'react-native'
import { Card, Text } from 'react-native-paper'
import AuthContext from '../../context/AuthContext'
import useRegistroByDate from '../../hooks/useRegistroByDate'
import CreateOrUpdateRegistro from '../../services/registros/CreateOrUpdateRegistro'
import { DiaNavigationProps } from '../../routes/App.routes'
import { logEvent } from 'expo-firebase-analytics'
import Loading from '../../components/Loading'
import EdicaoDiario from '../../components/EdicaoDiario'
import { theme } from '../../../theme'
import i18n from '../../i18n'

const Anotacoes = ({ navigation, route }: DiaNavigationProps) => {
  const dia = new Date(route.params.data)
  const { userId } = useContext(AuthContext)
  const { t } = i18n
  const { loading, registroDoDia } = useRegistroByDate({
    userId,
    date: dia,
    focus: true
  })
  const [anotacoes, setAnotacoes] = useState<string>('')
  const inputRef = useRef<TextInput>(null)

  useEffect(() => {
    setAnotacoes(registroDoDia?.anotacoes || '')
  }, [registroDoDia])

  const handleChangeTexto = (novoTexto: string) => {
    setAnotacoes(novoTexto)
  }

  const handleFoco = () => {
    inputRef.current.focus()
  }

  const onSalvarClick = async () => {
    await new CreateOrUpdateRegistro().call({
      id: registroDoDia?.id,
      date: dia,
      userId,
      anotacoes
    })
    logEvent('add_anotacoes')
  }

  return (
    <EdicaoDiario navigation={navigation} data={dia} onSalvar={onSalvarClick}>
      {loading ? (
        <Loading />
      ) : (
        <Card style={styles.card}>
          <Card.Content>
            <Pressable style={styles.header} onPress={handleFoco}>
              <Text>{t(`comum.anotacoes`)}:</Text>
            </Pressable>
            <View style={styles.conteudo}>
              <TextInput
                ref={inputRef}
                multiline
                style={styles.input}
                underlineColorAndroid="transparent"
                value={anotacoes}
                onChangeText={handleChangeTexto}
              />
            </View>
          </Card.Content>
        </Card>
      )}
    </EdicaoDiario>
  )
}

export default Anotacoes

const styles = StyleSheet.create({
  input: {
    color: theme.colors.text
  },
  habito: {
    width: '50%'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  card: {
    marginVertical: 10,
    minHeight: 100
  },
  conteudo: {
    paddingVertical: 16
  }
})
