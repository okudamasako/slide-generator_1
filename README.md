# スライド構成案ジェネレーター

テーマ・ターゲット・目的・箇条書きメモを入力するだけで、  
Gammaへそのまま貼り付け可能なMarkdown形式の  
スライド構成案をAIが自動生成するWebアプリです。

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

2. 環境変数を設定

cp .env.example .env

.env ファイルを開き、AnthropicのAPIキーを入力してください。

ANTHROPIC_API_KEY=your_api_key_here

3. Vercelにデプロイ

https://vercel.com にアクセスしてGitHubアカウントでログイン
「New Project」→ このリポジトリを選択
「Environment Variables」に ANTHROPIC_API_KEY を設定
「Deploy」をクリック

ファイル構成

├── index.html        # フロントエンド
├── api/
│   └── generate.js   # バックエンド（Vercel Serverless Function）
├── .env.example      # 環境変数サンプル
└── README.md

デモ

デモサイトはこちら　https://slide-generator-1.vercel.app/

注意事項

.env ファイルはGitHubにアップロードしないでください
APIキーは必ずVercelの環境変数から設定してください

補足

AIを活用したプレゼン構成生成システムとして、
実験・運用しているプロジェクトです。
