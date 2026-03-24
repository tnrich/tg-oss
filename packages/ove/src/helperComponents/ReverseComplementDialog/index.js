import React, { useState } from "react";
import { Button, Intent, Checkbox, Classes, Icon } from "@blueprintjs/core";
import classNames from "classnames";
import { wrapDialog } from "@teselagen/ui";
import { compose } from "redux";
import { tryToRefocusEditor } from "../../utils/editorUtils";

function ReverseComplementDialog({
  hideModal,
  onConfirm,
  onCancel,
  // ...props
}) {
  const [remember, setRemember] = useState(false);

  const handleConfirm = () => {
    onConfirm && onConfirm(remember);
    hideModal();
    tryToRefocusEditor();
  };

  const handleCancel = () => {
    onCancel && onCancel(remember);
    hideModal();
    tryToRefocusEditor();
  };

  return (
    <div className={classNames(Classes.DIALOG_BODY, "tg-min-width-dialog")}>
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        <Icon icon="help" iconSize={30} style={{ marginRight: 15, color: "gray" }} />
        <div style={{ flex: 1 }}>
          The selected annotation is in the reverse direction. Do you wish to
          reverse complement?
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <Checkbox
          checked={remember}
          onChange={e => setRemember(e.target.checked)}
          label="Remember my preference"
          style={{ marginBottom: 0 }}
        />
        <div>
          <Button onClick={handleCancel} text="No" style={{ marginRight: 10 }} />
          <Button
            intent={Intent.PRIMARY}
            onClick={handleConfirm}
            text="Yes"
          />
        </div>
      </div>
    </div>
  );
}

export default compose(
  wrapDialog({
    title: "Reverse Complement"
  })
)(ReverseComplementDialog);
