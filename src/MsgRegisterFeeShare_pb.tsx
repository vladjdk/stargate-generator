/* eslint-disable */
import Long from "long";
import { grpc } from "@improbable-eng/grpc-web";
import _m0 from "protobufjs/minimal";
import { BrowserHeaders } from "browser-headers";

export const protobufPackage = "juno.feeshare.v1";

/**
 * MsgTransfer defines a msg to transfer fungible tokens (i.e Coins) between
 * ICS20 enabled chains. See ICS Spec here:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 */
export interface MsgRegisterFeeShare_pb {
    contract_address: string,
    deployer_address: string,
    withdrawer_address: string
}

/** MsgTransferResponse defines the Msg/Transfer response type. */
export interface MsgRegisterFeeShareResponse {
  /** sequence number of the transfer packet sent */
  sequence: Long;
}

const baseMsgRegisterFeeShare_pb: object = {
    contract_address: "",
    deployer_address: "",
    withdrawer_address: ""
};

export const MsgRegisterFeeShare_pb = {
  encode(message: MsgRegisterFeeShare_pb, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.contract_address !== "") {
      writer.uint32(10).string(message.contract_address);
    }
    if (message.deployer_address !== "") {
      writer.uint32(18).string(message.deployer_address);
    }
    if (message.withdrawer_address !== "") {
        writer.uint32(26).string(message.withdrawer_address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShare_pb {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterFeeShare_pb } as MsgRegisterFeeShare_pb;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.contract_address = reader.string();
          break;
        case 2:
          message.deployer_address = reader.string();
          break;
        case 3:
            message.withdrawer_address = reader.string();
            break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterFeeShare_pb {
    const message = { ...baseMsgRegisterFeeShare_pb } as MsgRegisterFeeShare_pb;
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contract_address = String(object.sourcePort);
    } else {
      message.contract_address = "";
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
      message.deployer_address = String(object.deployer_address);
    } else {
      message.deployer_address = "";
    }
    if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
        message.withdrawer_address = String(object.withdrawer_address);
    } else {
        message.withdrawer_address = "";
    }
    return message;
  },

  toJSON(message: MsgRegisterFeeShare_pb): unknown {
    const obj: any = {};
    message.contract_address !== undefined && (obj.contract_address = message.contract_address);
    message.deployer_address !== undefined && (obj.deployer_address = message.deployer_address);
    message.withdrawer_address !== undefined && (obj.withdrawer_address = message.withdrawer_address);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterFeeShare_pb>): MsgRegisterFeeShare_pb {
    const message = { ...baseMsgRegisterFeeShare_pb } as MsgRegisterFeeShare_pb;
    if (object.contract_address !== undefined && object.contract_address !== null) {
      message.contract_address = object.contract_address;
    } else {
      message.contract_address = "";
    }
    if (object.deployer_address !== undefined && object.deployer_address !== null) {
        message.deployer_address = object.deployer_address;
    } else {
        message.deployer_address = "";
    }
    if (object.withdrawer_address !== undefined && object.withdrawer_address !== null) {
      message.withdrawer_address = object.withdrawer_address;
    } else {
      message.withdrawer_address = "";
    }
    return message;
  },
};

const baseMsgRegisterFeeShareResponse: object = { sequence: Long.UZERO };

export const MsgRegisterFeeShareResponse = {
  encode(message: MsgRegisterFeeShareResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.sequence.isZero()) {
      writer.uint32(8).uint64(message.sequence);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgRegisterFeeShareResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRegisterFeeShareResponse } as MsgRegisterFeeShareResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sequence = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRegisterFeeShareResponse {
    const message = { ...baseMsgRegisterFeeShareResponse } as MsgRegisterFeeShareResponse;
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = Long.fromString(object.sequence);
    } else {
      message.sequence = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgRegisterFeeShareResponse): unknown {
    const obj: any = {};
    message.sequence !== undefined && (obj.sequence = (message.sequence || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRegisterFeeShareResponse>): MsgRegisterFeeShareResponse {
    const message = { ...baseMsgRegisterFeeShareResponse } as MsgRegisterFeeShareResponse;
    if (object.sequence !== undefined && object.sequence !== null) {
      message.sequence = object.sequence as Long;
    } else {
      message.sequence = Long.UZERO;
    }
    return message;
  },
};

/** Msg defines the ibc/transfer Msg service. */
export interface Msg {
  /** Transfer defines a rpc handler method for MsgTransfer. */
  RegisterFeeShare(request: DeepPartial<MsgRegisterFeeShare_pb>, metadata?: grpc.Metadata): Promise<MsgRegisterFeeShareResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;

  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.RegisterFeeShare = this.RegisterFeeShare.bind(this);
  }

  RegisterFeeShare(request: DeepPartial<MsgRegisterFeeShare_pb>, metadata?: grpc.Metadata): Promise<MsgRegisterFeeShareResponse> {
    return this.rpc.unary(MsgRegisterFeeShareDesc, MsgRegisterFeeShare_pb.fromPartial(request), metadata);
  }
}

export const MsgDesc = {
  serviceName: "juno.feeshare.v1.Msg",
};

export const MsgRegisterFeeShareDesc: UnaryMethodDefinitionish = {
  methodName: "RegisterFeeShare",
  service: MsgDesc,
  requestStream: false,
  responseStream: false,
  requestType: {
    serializeBinary() {
      return MsgRegisterFeeShare_pb.encode(this).finish();
    },
  } as any,
  responseType: {
    deserializeBinary(data: Uint8Array) {
      return {
        ...MsgRegisterFeeShareResponse.decode(data),
        toObject() {
          return this;
        },
      };
    },
  } as any,
};

interface UnaryMethodDefinitionishR extends grpc.UnaryMethodDefinition<any, any> {
  requestStream: any;
  responseStream: any;
}

type UnaryMethodDefinitionish = UnaryMethodDefinitionishR;

interface Rpc {
  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any>;
}

export class GrpcWebImpl {
  private host: string;
  private options: {
    transport?: grpc.TransportFactory;

    debug?: boolean;
    metadata?: grpc.Metadata;
  };

  constructor(
    host: string,
    options: {
      transport?: grpc.TransportFactory;

      debug?: boolean;
      metadata?: grpc.Metadata;
    },
  ) {
    this.host = host;
    this.options = options;
  }

  unary<T extends UnaryMethodDefinitionish>(
    methodDesc: T,
    _request: any,
    metadata: grpc.Metadata | undefined,
  ): Promise<any> {
    const request = { ..._request, ...methodDesc.requestType };
    const maybeCombinedMetadata =
      metadata && this.options.metadata
        ? new BrowserHeaders({ ...this.options?.metadata.headersMap, ...metadata?.headersMap })
        : metadata || this.options.metadata;
    return new Promise((resolve, reject) => {
      grpc.unary(methodDesc, {
        request,
        host: this.host,
        metadata: maybeCombinedMetadata,
        transport: this.options.transport,
        debug: this.options.debug,
        onEnd: function (response) {
          if (response.status === grpc.Code.OK) {
            resolve(response.message);
          } else {
            const err = new Error(response.statusMessage) as any;
            err.code = response.status;
            err.metadata = response.trailers;
            reject(err);
          }
        },
      });
    });
  }
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}