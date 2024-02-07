import { Button, View } from "react-native"

export const navegacao = ({ navigation }) => {
    return (
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />

            <Button
                title="Senha"
                onPress={() => navigation.navigate("Senha")}
            />

            <Button
                title="Verificacao"
                onPress={() => navigation.navigate("Verificacao")}
            />
        </View>
    )
}