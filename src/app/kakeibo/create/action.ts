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
  };

  // データ挿入
  const { error } = await supabase.rpc("insert_data", {
    category,
    expensive,
    user,
  });

  // エラーが発生した場合
  if (error) {
    // ...
  }
}
