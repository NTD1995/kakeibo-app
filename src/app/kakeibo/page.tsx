// // 家計簿一覧画面
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import useStore from "../store";

export default function Kakeibos() {
  const router = useRouter();
  const { expenses, selectedCategory, setSelectedCategory, fetchExpenses } =
    useStore();

  useEffect(() => {
    fetchExpenses();
  }, []);

  const handleFilter = (category) => {
    console.log("Selected category:", category);
  };

  return (
    <>
      <h1 style={{ margin: "0", paddingLeft: "40px", fontSize: "24px" }}>
        一覧画面
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "16px",
          marginBottom: "16px",
        }}
      >
        <label style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          カテゴリー
          <select
            onChange={(e) => handleFilter(e.target.value)}
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
        </label>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#7d7d7d",
            border: "none",
            borderRadius: "4px",
          }}
        >
          絞り込み
        </button>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#7d7d7d",
            border: "none",
            borderRadius: "4px",
          }}
        >
          作成
        </button>
        <button
          style={{
            padding: "8px 16px",
            backgroundColor: "#7d7d7d",
            border: "none",
            borderRadius: "4px",
          }}
        >
          詳細
        </button>
      </div>

      <div style={{ padding: "16px", maxWidth: "800px", margin: "0 auto" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "8px",
          }}
        >
          <p style={{ flex: 2 }}>項目</p>
          <p style={{ flex: 1, textAlign: "center" }}>金額</p>
          <p style={{ flex: 1, textAlign: "center" }}>カテゴリー</p>
        </div>
        <ul style={{ listStyle: "none", padding: "0" }}>
          {[
            { item: "朝ごはん", price: "500円", category: "食費" },
            { item: "昼ごはん", price: "1000円", category: "食費" },
            { item: "夜ごはん", price: "800円", category: "食費" },
          ].map(({ item, price, category }, index) => (
            <li
              key={index}
              style={{
                background: "#f9f9f9",
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "16px",
                marginBottom: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <p style={{ flex: 2 }}>{item}</p>
              <p style={{ flex: 1, textAlign: "center" }}>{price}</p>
              <select
                style={{
                  flex: 1,
                  padding: "8px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  textAlign: "center",
                }}
                defaultValue={category}
              >
                <option value="食費">食費</option>
                <option value="水道光熱費">水道光熱費</option>
                <option value="交通費">交通費</option>
                <option value="通信費">通信費</option>
                <option value="日用品">日用品</option>
                <option value="趣味">趣味</option>
              </select>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
