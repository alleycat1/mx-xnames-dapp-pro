import {
  QrCodeWalletConnectorDataType,
  TransferMessage,
  WalletInfoDataType,
} from "app/types"
import { Subject } from "rxjs"

enum MessageNames {
  SET_INPUT_ERROR = "SET_INPUT_ERROR",
  SET_LOADING = "SETLOADING",
  AUTH_ERROR_EVENT = "AUTH_ERROR_EVENT",
}

interface BroadcastMessage {
  name: MessageNames | string
  payload?: any
}

const Subscriber = new Subject()
const MessageService = {
  send: function (msg: BroadcastMessage) {
    Subscriber.next(msg)
  },
}

const WalletQrCodeSubscriber: Subject<QrCodeWalletConnectorDataType> =
  new Subject()
const WalletQrCodeMessageService = {
  send: function (msg: QrCodeWalletConnectorDataType) {
    WalletQrCodeSubscriber.next(msg)
  },
}

const WalletRejectionSubscriber: Subject<any> = new Subject()
const WalletRejectionMessageService = {
  send: function (msg: any) {
    WalletRejectionSubscriber.next(msg)
  },
}

const WalletInfoSubscriber: Subject<WalletInfoDataType> = new Subject()
const WalletInfoMessageService = {
  send: function (msg: WalletInfoDataType) {
    WalletInfoSubscriber.next(msg)
  },
}

const TransactionsSubscriber: Subject<TransferMessage> = new Subject()
const TransactionsMessageService = {
  send: function (msg: any) {
    TransactionsSubscriber.next(msg)
  },
}

export {
  MessageNames,
  MessageService,
  Subscriber,
  WalletQrCodeSubscriber,
  WalletQrCodeMessageService,
  WalletInfoSubscriber,
  WalletInfoMessageService,
  TransactionsSubscriber,
  TransactionsMessageService,
  WalletRejectionSubscriber,
  WalletRejectionMessageService,
}
