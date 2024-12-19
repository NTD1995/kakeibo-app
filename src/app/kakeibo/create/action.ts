"use server";

// サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
import { createClient } from "@/utils/supabase/server";

/**
 * データ挿入
 * @param formData - フォームデータ
 */
export async function insertData(formData: FormData) {
  // Supabaseクライアントを作成
  const supabase = await createClient();

  // フォームから入力値を取得
  const inputs = {
    text: formData.get("text") as string,
    category: formData.get("category") as string,
    expensive: formData.get("expensive") === "true",
    user: formData.get("user") as string,
  };

  // データ挿入
  const { error } = await supabase.rpc("insert_data", {
    ...inputs,
  });

  // エラーが発生した場合
  if (error) {
    // ...
  }
}
