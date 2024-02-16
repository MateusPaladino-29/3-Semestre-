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

            <Button
                title="RedefinirSenha"
                onPress={() => navigation.navigate("RedefinirSenha")}
            />

            <Button
                title="NovaSenha"
                onPress={() => navigation.navigate("NovaSenha")}
            />
            <Button
                title="Perfil"
                onPress={() => navigation.navigate("Perfil")}
            />
            <Button
                title="ProntuarioMedico"
                onPress={() => navigation.navigate("ProntuarioMedico")}
            />
            <Button
                title="ConsultaMedico"
                onPress={() => navigation.navigate("ConsultaMedico")}
            />
        </View>
    )
}