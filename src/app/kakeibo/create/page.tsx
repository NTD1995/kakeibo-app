// 家計簿作成画面

export default function Create() {
  return (
    <>
      <h1>作成画面</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px",
        }}
      >
        <button style={{ marginLeft: "auto" }}>戻る</button>
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
          <input style={{ width: "100%" }} />
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
          <input style={{ width: "100%" }} />
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
        <button style={{ marginLeft: "auto" }}>作成</button>
      </div>
    </>
  );
}
