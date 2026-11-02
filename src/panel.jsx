function Panel(props) {
  // a választott színt paraméterben kapja
  let szin = props.szin;
  let hatterSzin = "";

  if (szin === null) {
    hatterSzin = "gray";
  } else {
    if (szin !== undefined) {
      if (szin.rgb !== undefined) {
        if (szin.rgb !== "") {
          hatterSzin = szin.rgb;
        } else {
          hatterSzin = "gray";
        }
      } else {
        hatterSzin = "gray";
      }
    } else {
      hatterSzin = "gray";
    }
  }

  return (
    <div
      style={{
        backgroundColor: hatterSzin,
        width: "300px",
        height: "200px",
        border: "2px solid black",
        marginTop: "20px",
      }}
    ></div>
  );
}

export default Panel;