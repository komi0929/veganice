/**
 * SoyStories お問い合わせ受信用 Google Apps Script
 * 
 * フォームタイプ:
 *   - sample: サンプル申込（住所あり）
 *   - inquiry: お問い合わせ（メッセージ）
 * 
 * スプレッドシートの列構成:
 *   A: タイムスタンプ
 *   B: 種別（サンプル申込 / お問い合わせ）
 *   C: 店舗名
 *   D: 担当者名
 *   E: メールアドレス
 *   F: 電話番号
 *   G: 郵便番号（サンプルのみ）
 *   H: 住所（サンプルのみ）
 *   I: 備考 / お問い合わせ内容
 */

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

    // ヘッダーが未設定の場合、自動で追加
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "受信日時",
        "種別",
        "店舗名",
        "担当者名",
        "メールアドレス",
        "電話番号",
        "郵便番号",
        "住所",
        "備考 / 内容"
      ]);
    }

    var formTypeLabel = data.formType === "sample" ? "サンプル申込" : "お問い合わせ";
    var contentField = data.formType === "sample"
      ? (data.notes || "")
      : (data.message || "");

    sheet.appendRow([
      new Date(data.timestamp),
      formTypeLabel,
      data.companyName || "",
      data.contactName || "",
      data.email || "",
      data.phone || "",
      data.postalCode || "",
      data.address || "",
      contentField
    ]);

    // メール通知（任意：自分宛に通知を飛ばす場合）
    var notifyEmail = "info@soystories.cafe"; // ← 通知先メールを設定
    var subject = "【SoyStories】" + formTypeLabel + " - " + (data.companyName || "不明");
    var body = "■ 種別: " + formTypeLabel + "\n"
      + "■ 店舗名: " + (data.companyName || "") + "\n"
      + "■ 担当者: " + (data.contactName || "") + "\n"
      + "■ メール: " + (data.email || "") + "\n"
      + "■ 電話: " + (data.phone || "") + "\n";

    if (data.formType === "sample") {
      body += "■ 〒: " + (data.postalCode || "") + "\n"
        + "■ 住所: " + (data.address || "") + "\n"
        + "■ 備考: " + (data.notes || "なし") + "\n";
    } else {
      body += "■ 内容: " + (data.message || "") + "\n";
    }

    MailApp.sendEmail(notifyEmail, subject, body);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
