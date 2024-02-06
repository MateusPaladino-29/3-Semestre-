import { Button, View } from "react-native"

export const navegacao = ({navigation}) => {
    return(
        <View>
            <Button
                title="Login"
                onPress={() => navigation.navigate("Login")}
            />
        </View>
    )
}