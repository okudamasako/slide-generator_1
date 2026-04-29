export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { theme, target, goal, memo, slideCount } = req.body;

  if (!theme || !target || !goal || !memo) {
    return res.status(400).json({ error: '必須項目が不足しています' });
  }

  const prompt = `あなたはプレゼン資料の構成エキスパートです。
以下の情報をもとに、Gamma（AI資料作成ツール）の「テキストから生成」機能に貼り付けて使えるMarkdown形式のスライド構成案を作成してください。

【入力情報】
- テーマ：${theme}
- ターゲット：${target}
- 目的・ゴール：${goal}
- 要点・メモ：
${memo}
- スライド枚数の目安：${slideCount}

【出力ルール】
1. Markdown形式で出力すること
2. 各スライドを ## スライドタイトル で区切ること
3. 各スライドに3〜5個の箇条書きポイントを入れること
4. 冒頭に # プレゼンタイトル を入れること
5. ストーリーラインを意識した論理的な流れにすること（課題→解決→価値→行動）
6. 日本語で出力すること
7. Markdownのコードブロック（\`\`\`）は使わず、そのままMarkdownテキストで出力すること
8. 説明文や前置きは不要。Markdownのみ出力すること`;

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }]
        })
      }
    );

    const data = await response.json();

    if (!response.ok) {
      return res.status(500).json({ error: data.error?.message || 'API呼び出しに失敗しました' });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '';
    return res.status(200).json({ result: text });

  } catch (err) {
    return res.status(500).json({ error: 'サーバーエラーが発生しました: ' + err.message });
  }
}
