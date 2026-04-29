# スライド構成案ジェネレーター

テーマ・ターゲット・目的・箇条書きメモを入力するだけで、Gamma貼り付け用のMarkdown構成案をAIが自動生成するWebアプリです。

## 機能

- 入力フォームに情報を入力
- Claude AIがスライド構成案（Markdown形式）を自動生成
- ワンクリックでコピー → Gammaに貼り付けるだけで資料完成

## 使用技術

- フロントエンド：HTML / CSS / JavaScript
- バックエンド：Vercel Serverless Functions（Node.js）
- AI：Anthropic Claude API

## セットアップ

### 1. リポジトリをクローン

```bash
git clone https://github.com/YOUR_USERNAME/slide-generator_1.git
cd slide-generator_1
```

### 2. 環境変数を設定

```bash
cp .env.example .env
```

`.env` ファイルを開き、AnthropicのAPIキーを入力してください。

```
ANTHROPIC_API_KEY=your_api_key_here
```

### 3. Vercelにデプロイ

1. [Vercel](https://vercel.com) にアクセスしてGitHubアカウントでログイン
2. 「New Project」→ このリポジトリを選択
3. 「Environment Variables」に `ANTHROPIC_API_KEY` を設定
4. 「Deploy」をクリック

## ファイル構成

```
├── index.html        # フロントエンド
├── api/
│   └── generate.js   # バックエンド（Vercel Serverless Function）
├── .env.example      # 環境変数のサンプル
└── README.md
```

## 注意事項

- `.env` ファイルはGitHubにアップロードしないでください
- APIキーは必ずVercelの環境変数から設定してください
