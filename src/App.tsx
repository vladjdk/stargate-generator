import React, { useState, useCallback, useMemo } from "react";
import { Coin, MsgTransfer } from "@terra-money/feather.js";

function App() {
  const initialTimeout = useMemo(
    () => ((Date.now() + 1200 * 1000) * 1e6).toString(),
    []
  );

  const [formData, setFormData] = useState({
    source_port: "transfer",
    source_channel: "channel-2",
    token_amount: "1",
    token_denom: "uluna",
    sender: "terra10ccgmljuey0vy9k0xxua8r8kuc7jy4ky4wk53eegject9gmycdnqnv48sr",
    receiver: "juno10c84vdfjhy4sw8xlyu09twaqpzk4a2px4m8mxaa40mpmsnw09acszccjn4",
    timeout_timestamp: initialTimeout,
    memo: '{"wasm":{"contract":"juno10c84vdfjhy4sw8xlyu09twaqpzk4a2px4m8mxaa40mpmsnw09acszccjn4","msg":{"execute_msgs":{"msgs":[{"wasm":{"instantiate":{"admin":"juno1d03ftpw5tefzq22akwq839kyudsf88yvkq00dq","code_id":3366,"msg":"eyJvd25lciI6Imp1bm8xZDAzZnRwdzV0ZWZ6cTIyYWt3cTgzOWt5dWRzZjg4eXZrcTAwZHEifQ==","funds":[{"denom":"uluna","amount":"1"}],"label":"proxy_contract"}}}]}}}}',
  });

  const [output_message, set_output_message] = useState("");

  const updateFormData = useCallback((key: string, value: string) => {
    setFormData((prevData) => ({ ...prevData, [key]: value }));
  }, []);

  const updateTimeout = useCallback(() => {
    const newTimeout = ((Date.now() + 1200 * 1000) * 1e6).toString();
    updateFormData("timeout_timestamp", newTimeout);
  }, [updateFormData]);

  const generateMessage = useCallback(() => {
    try {
      const msgs = new MsgTransfer(
        formData.source_port,
        formData.source_channel,
        new Coin(formData.token_denom, formData.token_amount),
        formData.sender,
        formData.receiver,
        undefined,
        formData.timeout_timestamp,
        formData.memo
      );

      const packed = msgs.packAny();
      const message = {
        stargate: {
          type_url: packed.typeUrl,
          value: packed.value,
        },
      };
      set_output_message(JSON.stringify(message));
    } catch (error) {
      console.error("Error generating message:", error);
    }
  }, [
    formData.source_port,
    formData.source_channel,
    formData.token_denom,
    formData.token_amount,
    formData.sender,
    formData.receiver,
    formData.timeout_timestamp,
    formData.memo,
  ]);

  return (
    <>
      <fieldset>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            generateMessage();
          }}
        >
          {Object.keys(formData).map((field, k) => {
            return (
              <fieldset>
                <legend>{field}</legend>
                <input
                  type={"text"}
                  style={{ width: "100%" }}
                  value={formData[field]}
                />
              </fieldset>
            );
          })}
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
    </>
  );
}

export default App;
