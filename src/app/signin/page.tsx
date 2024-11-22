// ログイン画面

export default function Loguin() {
  return (
    <>
      <h1 style={{ margin: "0", paddingLeft: "40px", fontSize: "24px" }}>
        ログイン画面
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
          <p>メールアドレス</p>
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
          <p>パスワード</p>
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
          <p>Googleログイン</p>
          <input style={{ width: "100%" }} />
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
            backgroundColor: "#32CD32",
            border: "none",
            borderRadius: "4px",
            marginLeft: "auto",
          }}
        >
          ログイン
        </button>
      </div>
    </>
  );
}
