import { Linking } from "react-native"
import { TextCancel, TextCancelProntuario, TextEmail, TextLinkMedium } from "./StylesLink"
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

export const LinkCodigo = ({
    url
}) => {
    return(
        <TextEmail onPress={() => {Linking.openURL(`${url}`)}}>Reenviar Código</TextEmail>
    )
}

export const Cancelar = ({
    url
}) => {
    return(
        <TextCancel onPress={() => {Linking.openURL(`${url}`)}}>Cancelar</TextCancel>
    )
}
export const CancelarProntuario = ({
    url
}) => {
    return(
        <TextCancelProntuario onPress={() => {Linking.openURL(`${url}`)}}>Cancelar</TextCancelProntuario>
    )
}

