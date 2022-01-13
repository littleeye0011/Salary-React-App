import { useEffect, useState } from "react";

const InputBaseSalary = () => {
  const [baseSalary, setBaseSalary] = useState(" ");

  const [ot1, setOt1] = useState("");
  const [ot15, setOt15] = useState("");
  const [ot3, setOt3] = useState("");

  const [perDay, setPerDay] = useState("");
  const [perHour, setPerHour] = useState("");
  const [allSalary, setAllSalary] = useState("");

  useEffect(() => {
    if (baseSalary !== isNaN) {
      setPerDay((baseSalary / 30).toFixed(3));
    } else {
      setBaseSalary("");
    }
  }, [baseSalary]);

  useEffect(() => {
    setPerHour((perDay / 8).toFixed(3));
  }, [perDay]);

  useEffect(() => {
    const OTx1 = perHour * ot1;
    const OTx1_5 = perHour * ot15 * 1.5;
    const OTx3 = perHour * ot3 * 3;

    const result = Number(baseSalary) + OTx1 + OTx1_5 + OTx3;
    setAllSalary(result.toFixed(3));
    console.log(OTx1, OTx1_5, OTx3);
  }, [ot1, ot15, ot3]);

  return (
    <div className="container">
      <form className="salary">
        <input
          type="text"
          value={baseSalary}
          className="input"
          onChange={(e) => setBaseSalary(e.target.value)}
        />
        <label>ฐานเงินเดือน</label>
      </form>
      <div className="overtime">
        <div>
          <input
            type="text"
            className="input addot"
            value={ot1}
            onChange={(e) => setOt1(e.target.value)}
          />
          <label> OT x 1</label>
        </div>
        <div>
          <input
            type="text"
            className="input addot"
            value={ot15}
            onChange={(e) => setOt15(e.target.value)}
          />
          <label> OT x 1.5</label>
        </div>
        <div>
          <input
            type="text"
            className="input addot"
            value={ot3}
            onChange={(e) => setOt3(e.target.value)}
          />
          <label> OT x 3</label>
        </div>
      </div>
      <div className="result">
        <div className="showdetail">
          <input type="text" value={perDay} disabled />
          <label>รายได้ต่อวัน</label>
        </div>
        <div className="showdetail">
          <input type="text" value={perHour} disabled />
          <label>รายได้ต่อชัวโมง</label>
        </div>
        <div className="all-result">
          <input type="text" value={allSalary} disabled />
          <label>เงินที่จะได้รับ</label>
        </div>
      </div>
    </div>
  );
};

export default InputBaseSalary;
