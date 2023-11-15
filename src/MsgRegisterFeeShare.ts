import { Any } from '@terra-money/terra.proto/google/protobuf/any';
import { JSONSerializable } from '@terra-money/feather.js/dist/util/json';
import {MsgRegisterFeeShare_pb} from "./MsgRegisterFeeShare_pb"

/**
 * A basic message for transfer [[Coin]] via IBC.
 */
export class MsgRegisterFeeShare extends JSONSerializable<
    MsgRegisterFeeShare.Amino,
    MsgRegisterFeeShare.Data,
    MsgRegisterFeeShare.Proto
> {
  public contract_address: string;
  public deployer_address: string;
  public withdrawer_address: string;
  /**
   * @param contract_address the port on which the packet will be sent
   * @param deployer_address  the channel by which the packet will be sent
   * @param withdrawer_address the tokens to be transferred
   */
  constructor(
    contract_address: string,
    deployer_address: string,
    withdrawer_address: string
  ) {
    super();

    this.contract_address = contract_address;
    this.deployer_address = deployer_address;
    this.withdrawer_address = withdrawer_address
  }

  public static fromAmino(data: MsgRegisterFeeShare.Amino, _?: boolean): MsgRegisterFeeShare {
    // _;
    const {
      value: {
        contract_address,
        deployer_address,
        withdrawer_address
      },
    } = data;

    return new MsgRegisterFeeShare(
        contract_address,
        deployer_address,
        withdrawer_address
    );
  }

  public toAmino(_?: boolean): MsgRegisterFeeShare.Amino {
    // _;
    const {
        contract_address,
        deployer_address,
        withdrawer_address
    } = this;
    return {
      type: 'cosmos-sdk/MsgRegisterFeeShare',
      value: {
        contract_address,
        deployer_address,
        withdrawer_address
      },
    };
  }

  public static fromData(data: MsgRegisterFeeShare.Data, _?: boolean): MsgRegisterFeeShare {
    // _;
    const {
        contract_address,
        deployer_address,
        withdrawer_address
    } = data;

    return new MsgRegisterFeeShare(
        contract_address,
        deployer_address,
        withdrawer_address
    );
  }

  public toData(_?: boolean): MsgRegisterFeeShare.Data {
    // _;
    const {
        contract_address,
        deployer_address,
        withdrawer_address
    } = this;
    return {
      '@type': "/juno.feeshare.v1.MsgRegisterFeeShare",
      contract_address,
      deployer_address,
      withdrawer_address
    };
  }

  public static fromProto(proto: MsgRegisterFeeShare.Proto, _?: boolean): MsgRegisterFeeShare {
    // _;

    return new MsgRegisterFeeShare(
        proto.contract_address,
        proto.deployer_address,
        proto.withdrawer_address
    );
  }

  public toProto(_?: boolean): MsgRegisterFeeShare.Proto {
    // _;
    const {
        contract_address,
        deployer_address,
        withdrawer_address
    } = this;
    return MsgRegisterFeeShare_pb.fromPartial({
        contract_address,
        deployer_address,
        withdrawer_address
    });
  }

  public packAny(isClassic?: boolean): Any {
    return Any.fromPartial({
      typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShare",
      value: MsgRegisterFeeShare_pb.encode(this.toProto(isClassic)).finish(),
    });
  }

  public static unpackAny(msgAny: Any, isClassic?: boolean): MsgRegisterFeeShare {
    return MsgRegisterFeeShare.fromProto(
      MsgRegisterFeeShare_pb.decode(msgAny.value),
      isClassic
    );
  }
}

export namespace MsgRegisterFeeShare {
  export interface Amino {
    type: 'cosmos-sdk/MsgRegisterFeeShare';
    value: {
        contract_address: string,
        deployer_address: string,
        withdrawer_address: string
    };
  }
  export interface Data {
    '@type': "/juno.feeshare.v1.MsgRegisterFeeShare";
    contract_address: string,
    deployer_address: string,
    withdrawer_address: string
  }
  export type Proto = MsgRegisterFeeShare_pb;
}