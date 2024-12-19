// // サーバー側の処理なので、サーバー側のSupabaseクライアントを使用
// import { createClient } from "@/utils/supabase/server";

// // このページをSSRにする（これがないと本番環境でこのページはSSGになる。その結果データベースを更新しても反映されなくなる。※supabaseとは関係なく、App Routerのお話）
// export const revalidate = 0;

// const Page = async () => {
//   // Supabaseクライアントを作成
//   const supabase = createClient();

//   // リストを取得
//   const { data: category, error } = await supabase.from("category").select();

//   // エラーが発生した場合
//   if (error) {
//     // ...
//   }

// export default Page;
