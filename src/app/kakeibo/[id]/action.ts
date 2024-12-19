// "use server";

// // サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
// import { createClient } from "@/utils/supabase/server";

// /**
//  * データ更新
//  * @param formData - フォームデータ
//  */
// export async function updateData(formData: FormData) {
//   // Supabaseクライアントを作成
//   const supabase = await createClient();

//   // フォームから入力値を取得
//   const inputs = {
//     id: formData.get("id") as string,
//     text: formData.get("text") as string,
//   };

//   // データ更新
//   const { error } = await supabase
//     .from("category") // categoryテーブルを
//     .update({ text: inputs.text }) // 入力されたテキストに更新する
//     .eq("id", parseInt(inputs.id)); // 対象はidが一致するデータ

//   const { error } = await supabase
//     .from("evpensive") // expensiveテーブルを
//     .update({ text: inputs.text }) // 入力されたテキストに更新する
//     .eq("id", parseInt(inputs.id)); // 対象はidが一致するデータ

//   const { error } = await supabase
//     .from("user") // userテーブルを
//     .update({ text: inputs.text }) // 入力されたテキストに更新する
//     .eq("id", parseInt(inputs.id)); // 対象はidが一致するデータ

//   // エラーが発生した場合
//   if (error) {
//     // ...
//   }

//   /**
//    * データ削除
//    * @param formData - フォームデータ
//    */
//   export async function deleteData(formData: FormData) {
//     // Supabaseクライアントを作成
//     const supabase = await createClient();

//     // フォームから入力値を取得
//     const inputs = {
//       id: formData.get("id") as string,
//       text: formData.get("text") as string,
//     };

//     // データ削除
//     const { error } = await supabase
//       .from("category") // categoryテーブルから
//       .delete() // 対象データを削除する
//       .eq("id", parseInt(inputs.id)); // 対象はidが一致するデータ

//     const { error } = await supabase
//       .from("expensive") // expensiveテーブルから
//       .delete() // 対象データを削除する
//       .eq("id", parseInt(inputs.id)); // 対象はidが一致するデータ

//     const { error } = await supabase
//       .from("user") // userテーブルから
//       .delete() // 対象データを削除する
//       .eq("id", parseInt(inputs.id)); // 対象はidが一致するデータ

//     // エラーが発生した場合
//     if (error) {
//       // ...
//     }

//     // ページを再検証する（最新のデータを取得しなおす）
//     revalidatePath("/delete");
//   }
// }
