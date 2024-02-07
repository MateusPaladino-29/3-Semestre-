import { Linking } from "react-native"
import { TextLinkMedium } from "./StylesLink"
import { LinkAccount, TextAccount } from "../Title/StylesTitle"



export const LinkMedium = ({
    url
}) => {
    return(
        <TextLinkMedium
            onPress={() => {Linking.openURL(`${url}`)}}
        >Esqueceu sua senha!</TextLinkMedium>
    )
}

export const ContentAccount = ({
    url
}) => {
    return(
        <TextAccount>Nao tem uma conta?<LinkAccount onPress={() => {Linking.openURL(`${url}`)}}>Crie uma conta agora</LinkAccount></TextAccount>
    )
}

