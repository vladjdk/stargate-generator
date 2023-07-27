import React from "react";
import { Coin, MsgTransfer } from "@terra-money/feather.js";

function App() {
  const [source_port, set_source_port] = React.useState("transfer");
  const [source_channel, set_source_channel] = React.useState("channel-2");
  const [token_amount, set_token_amount] = React.useState("1");
  const [token_denom, set_token_denom] = React.useState("uluna");
  const [sender, set_sender] = React.useState(
    "terra10ccgmljuey0vy9k0xxua8r8kuc7jy4ky4wk53eegject9gmycdnqnv48sr"
  );
  const [receiver, set_receiver] = React.useState(
    "juno10c84vdfjhy4sw8xlyu09twaqpzk4a2px4m8mxaa40mpmsnw09acszccjn4"
  );
  const [timeout_timestamp, set_timeout_timestamp] = React.useState(
    ((Date.now() + 1200 * 1000) * 1e6).toString()
  );
  const [memo, set_memo] = React.useState(
    '{"wasm":{"contract":"juno10c84vdfjhy4sw8xlyu09twaqpzk4a2px4m8mxaa40mpmsnw09acszccjn4","msg":{"execute_msgs":{"msgs":[{"wasm":{"instantiate":{"admin":"juno1d03ftpw5tefzq22akwq839kyudsf88yvkq00dq","code_id":3366,"msg":"eyJvd25lciI6Imp1bm8xZDAzZnRwdzV0ZWZ6cTIyYWt3cTgzOWt5dWRzZjg4eXZrcTAwZHEifQ==","funds":[{"denom":"ibc/107D152BB3176FAEBF4C2A84C5FFDEEA7C7CB4FE1BBDAB710F1FD25BCD055CBF","amount":"1"}],"label":"proxy_contract"}}}]}}}}'
  );
  const [output_message, set_output_message] = React.useState("");

  function update_time() {
    set_timeout_timestamp(((Date.now() + 1200 * 1000) * 1e6).toString());
  }

  function generate_message() {
    const msgs = new MsgTransfer(
      source_port,
      source_channel,
      new Coin(token_denom, token_amount),
      sender,
      receiver,
      undefined,
      timeout_timestamp,
      memo
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
          <legend>MsgTransfer</legend>
          <fieldset>
            <legend>Source Port</legend>
            <input
              onChange={(e) => {
                set_source_port(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              value={source_port}
            />
          </fieldset>
          <fieldset>
            <legend>Source Channel</legend>
            <input
              onChange={(e) => {
                set_source_channel(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              value={source_channel}
            />
          </fieldset>
          <fieldset>
            <legend>Source Port</legend>
            <input
              onChange={(e) => {
                set_source_port(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              value={source_port}
            />
          </fieldset>
          <fieldset>
            <legend>Token</legend>
            <dl>
              <dt>Amount</dt>
              <dd>
                <input
                  onChange={(e) => {
                    set_token_amount(e.target.value);
                  }}
                  type="text"
                  style={{ width: "100%" }}
                  value={token_amount}
                />
              </dd>
              <dt>Denom</dt>
              <dd>
                <input
                  onChange={(e) => {
                    set_token_denom(e.target.value);
                  }}
                  type="text"
                  style={{ width: "100%" }}
                  value={token_denom}
                />
              </dd>
            </dl>
          </fieldset>
          <fieldset>
            <legend>Sender</legend>
            <input
              onChange={(e) => {
                set_sender(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              value={sender}
            />
          </fieldset>
          <fieldset>
            <legend>Receiver</legend>
            <input
              onChange={(e) => {
                set_receiver(e.target.value);
              }}
              type="text"
              style={{ width: "100%" }}
              value={receiver}
            />
          </fieldset>
          <fieldset>
            <legend>Timeout</legend>
            <dl>
              <dt>
                {" "}
                <input
                  onChange={(e) => {
                    set_timeout_timestamp(e.target.value);
                  }}
                  type="text"
                  style={{ width: "100%" }}
                  value={timeout_timestamp}
                />
              </dt>
              <dt>
                <button
                  onClick={() => {
                    update_time();
                  }}
                  type="button"
                >
                  Update Time
                </button>
              </dt>
            </dl>
          </fieldset>
          <fieldset>
            <legend>Memo</legend>
            <textarea
              onChange={(e) => {
                set_memo(e.target.value);
              }}
              rows={10}
              style={{ width: "100%" }}
              value={memo}
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
