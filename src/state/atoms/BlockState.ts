import { atom } from "recoil";

export const recentBlock = atom({
    key : "RecentBlockNumber",
    default : ''
})

export const etherPrice = atom({
    key : "EtherPrice",
    default : 0
})

export const btcPrice = atom({
    key : "BTCPrice",
    default : 0
})