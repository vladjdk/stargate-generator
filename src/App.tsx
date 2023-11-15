import React from "react";
import { MsgRegisterFeeShare } from "./MsgRegisterFeeShare";

function App() {
  const [contract_address, set_contract_address] = React.useState("terra1u3z42fpctuhh8mranz4tatacqhty6a8yk7l5wvj7dshsuytcms2qda4f5x");
  const [deployer_address, set_deployer_address] = React.useState("terra1u3z42fpctuhh8mranz4tatacqhty6a8yk7l5wvj7dshsuytcms2qda4f5x");
  const [withdrawer_address, set_withdrawer_address] = React.useState("terra1yfq2wwsxw7auxp08g0ccz3uykvsc0s4wkq0p3m");

  const [output_message, set_output_message] = React.useState("");

  function generate_message() {
    const msgs = new MsgRegisterFeeShare(
        contract_address,
        deployer_address,
        withdrawer_address
    );

    const packed = msgs.packAny();
    const message = {
      stargate: {
        type_url: packed.typeUrl,
        value: Buffer.from(packed.value).toString("base64"),
      },
    };
    set_output_message(JSON.stringify(message));
  }

  return (
    <div className="App">
      <fieldset>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            generate_message();
          }}
        >
          <legend>MsgRegisterFeeShare</legend>
          <fieldset>
            <legend>Contract Address</legend>
            <input
              onChange={(e) => {
                set_contract_address(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              value={contract_address}
            />
          </fieldset>
          <fieldset>
            <legend>Deployer Address</legend>
            <input
              onChange={(e) => {
                set_deployer_address(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              value={deployer_address}
            />
          </fieldset>
          <fieldset>
            <legend>Withdrawer Address</legend>
            <input
              onChange={(e) => {
                set_withdrawer_address(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              value={withdrawer_address}
            />
          </fieldset>
          <fieldset>
            <button type={"submit"}>Generate</button>
          </fieldset>
        </form>
      </fieldset>
      <fieldset>
        <legend>Output</legend>
        <textarea
          rows={20}
          style={{ width: "100%" }}
          readOnly
          value={output_message}
        />
      </fieldset>
    </div>
  );
}

export default App;
