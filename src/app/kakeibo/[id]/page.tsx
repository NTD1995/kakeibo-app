// 家計簿詳細画面
import { useRouter } from 'next/router';
import { Expense, deleteExpense } from '../store'; 

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const { expenses } = useStore();
  const expense: Expense | undefined = expenses.find((e: React.FormEvent<HTMLFormElement>) => e.id === id);

  const handleEdit = () => {
    router.push(`/edit/${id}`); 
  };

  const handleDelete = async () => {
    await deleteExpense(id);
    router.push('/');
  };

export default function Detail() {
  return (
    <>
      <h1 style={{ margin: "0", paddingLeft: "40px", fontSize: "24px" }}>
        詳細画面
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
          <span
            style={{ width: "100%", border: "1px solid #ccc", padding: "5px" }}
          >
            {expense?.item}
            朝ごはん
          </span>
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
          <span
            style={{ width: "100%", border: "1px solid #ccc", padding: "5px" }}
          >
            {expense?.amount}
            500円
          </span>
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
          {expense?.category}
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
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#32CD32",
              border: "none",
              borderRadius: "4px",
            }}
          >
            編集
          </button>
          <button
            style={{
              padding: "8px 16px",
              backgroundColor: "#32CD32",
              border: "none",
              borderRadius: "4px",
            }}
          >
            削除
          </button>
        </div>
      </div>
    </>
  );
}
