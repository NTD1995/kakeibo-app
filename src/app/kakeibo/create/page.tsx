// 家計簿作成画面
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const navigate = useNavigate();
  const [item, setItem] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("食費");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newExpense = {
      item,
      amount,
      category,
    };

    console.log("新しい支出:", newExpense);

    navigate(-1);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1 style={{ margin: "0", paddingLeft: "40px", fontSize: "24px" }}>
          作成画面
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#32CD32",
              border: "none",
              borderRadius: "4px",
              marginLeft: "auto",
            }}
          >
            戻る
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "20px",
            padding: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <p>項目</p>
            <input style={{ width: "100%", border: "1px solid #ccc" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <p>金額</p>
            <input style={{ width: "100%", border: "1px solid #ccc" }} />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "100%",
            }}
          >
            <p>カテゴリー</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <select
                style={{
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                }}
              >
                <option value="食費">食費</option>
                <option value="水道光熱費">水道光熱費</option>
                <option value="交通費">交通費</option>
                <option value="通信費">通信費</option>
                <option value="日用品">日用品</option>
                <option value="趣味">趣味</option>
              </select>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#228B22",
              border: "none",
              borderRadius: "4px",
              marginLeft: "auto",
              type = "submit",
            }}
          >
            作成
          </button>
        </div>
      </form>
    </>
  );
}
