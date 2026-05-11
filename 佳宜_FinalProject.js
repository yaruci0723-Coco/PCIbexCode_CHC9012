// 1. 重置前綴，讓 PennController 的指令可以簡寫
PennController.ResetPrefix(null);

// 在腳本頂部加入全域樣式設定
Header(
    defaultText
        .settings.css("word-break", "break-all")
        .settings.css("white-space", "normal")
        .settings.css("margin-bottom", "1em")
        .settings.css("font-size", "1.2em") 
);

AddHost("https://raw.githubusercontent.com/yaruci0723-Coco/Audio_CHC9012/main/");

// 2. 定義實驗執行順序 (Sequence)
Sequence(
    "Welcome page", 
    "Instructions",
    "Background", 
    "PracticeInstr", 
    "Practice", 
    "ExperimentInstr", 
    randomize("Experiment"),
    "Send", 
    "Goodbye"
);

// 3. 歡迎頁面
newTrial("Welcome page",
    newText("首頁")
    .css("font-size", "26px")
    .css("margin-bottom", "1em")
    .print()
    .center()
    ,
    newText("歡迎參與本研究！本研究為國立臺灣師範大學「語言問卷」課堂上的練習。<br>為了協助同學，請在安靜、安全的地方完成本問卷。本問卷會收集基本個人資料，但我們不會收集您的姓名。也不會強迫您提供個人資料，若您不想提供，可直接跳過個人資料頁面。同學都受過充足的研究倫理訓練。<br>不過，本問卷未經過研究倫理審查（IRB），因此結果僅供課堂練習使用，並不會發表於任何地方（如：學位論文、學術或非學術會議、期刊等），請您放心作答。<br>若有任何疑慮，您可以選擇放棄參與，在未完成並提交問卷前，系統不會儲存任何資料。再次感謝您的協助。若同意參與，請點選「繼續」。")
        .css("border", "2px solid black")   
        .css("padding", "10px")            
        .css("width", "90%")         
        .css("max-width", "800px")   
        .css("background-color", "#f9f9f9") 
        .css("font-size", "20px")
        .css("margin-bottom", "1em")
        .css("margin-left", "auto")
        .css("margin-right", "auto")
        .print()
        .center()
    ,
    newButton("繼續")
    .size(300, 50)               // 修改為與其他按鈕一致的 300, 50
    .css({
        "font-size": "24px",      
        "font-weight": "bold",    
        "background-color": "lightyellow", 
        "color": "black"          
        })
        .center()
        .print()
        .wait()
);

newTrial("Instructions",
    newCanvas("InfoBox", "auto", "auto") 
    .css({
        "border": "2px solid black",
        "padding": "5%",           
        "background-color": "white",
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "width": "90vw",           
        "max-width": "1000px"
    })
    .center()
    .print()
    ,
    newText("intro_title", "【實驗說明與注意事項】")
        .css("font-size", "24px")
        .css("margin-bottom", "1em")
        .css("text-align", "center") 
        .print(getCanvas("InfoBox"))
        .center()
    ,
    newText("intro_content", "感謝您參與本項語言理解測試。本實驗旨在觀察不同的資訊呈現方式對句子理解的影響。<br>測試過程中會包含聽力與閱讀內容，請確保您處於安靜環境作答。")
        .css("font-size", "22px")
        .css("margin-bottom", "1em")
        .css("text-align", "center") 
        .print(getCanvas("InfoBox"))
        .center()
    ,
    newText("Item1", "<br> 【事項一】<br>為了確保實驗流程順暢與顯示效果，<br>建議您使用<b>桌上型電腦或筆記型電腦</b>填寫本問卷。")
        .color("red")
        .css("font-size", "22px")
        .css("margin-bottom", "1em")
        .css("text-align", "center") 
        .print(getCanvas("InfoBox"))
        .center()
    ,
    newText("Item2", "<br>【事項二】<br>本實驗包含聽力測驗，請務必<b>佩戴耳機</b>以獲得最佳效果。")
        .css("font-size", "22px")
        .css("margin-bottom", "1em")
        .css("text-align", "center") 
        .print(getCanvas("InfoBox"))
        .center()
    ,
    newAudio("test_sound", "audio_test.mp3") 
    ,
    // 修改按鈕 1：測試音訊
    newButton("play_test", "點此測試音訊 (Test Audio)")
        .size(300, 50)               // 設定固定尺寸為 300, 50
        .css({
            "margin-bottom": "2em",
            "font-size": "20px",      // 調整字體大小以適應按鈕
            "font-weight": "bold",
            "background-color": "lightyellow"
        })
        .center()
        .print(getCanvas("InfoBox"))
        .callback( getAudio("test_sound").play() ) 
    ,
    // 修改按鈕 2：檢查完畢
    newButton("next_step", "點此表示設備檢查完畢")
        .size(300, 50)               // 設定固定尺寸為 300, 50
        .css({
            "margin-bottom": "2em",
            "font-size": "20px",      // 調整字體大小以適應按鈕
            "font-weight": "bold",
            "background-color": "lightyellow"
        })
        .center()
        .print(getCanvas("InfoBox"))
        .wait()
);

// 4. 背景資料收集
newTrial("Background",
  newText("我們會詢問一些關於您背景的問題。<br>如果您不想回答某些問題，可以跳過。")
    .css("font-size", "24px")
    .css("margin-bottom", "2em")
    .print()
    .center()
    ,
    newText("age_label", "請輸入年齡")
     .css("font-size", "22px")
     .css("margin-bottom", "1em")
     .print()
     .center(),
    
    newTextInput("Age")
    .size(300, 50)
    .css("font-size", "22px")
    .css("margin-bottom", "1em")
    .print().center().log("final"),
    
    newText("native_label", "請問你是中文母語者嗎？")
    .css("font-size", "22px")
    .css("margin-bottom", "1em")
    .print()
    .center(),
    newDropDown("Native", "請選取")
    .size(150, 50)               
    .css({
        "font-size": "20px",      
        "font-weight": "bold",    
        "background-color": "white", 
        "color": "black",
        "cursor": "pointer"
    })
    .add("是", "否")
    .print()
    .center()
    .log()
    ,
    newText("sep2", "<br>").print().center(),
    newButton("next", "繼續")
    .size(300, 50)               
    .css({
        "font-size": "26px",      
        "font-weight": "bold",    
        "background-color": "lightyellow", 
        "color": "black"          
    })
    .center().print().wait(),
    
    newVar("VAR_AGE").global().set(getTextInput("Age")),
    newVar("VAR_NATIVE").global().set(getDropDown("Native"))
);

// 4. 練習階段指令頁面
newTrial("PracticeInstr",
    newText("以下是練習題，請根據畫面指示操作。")
        .css("margin-bottom", "3em").css("font-size", "24px")
        .print().center(),
    
    newButton("開始練習")
    .size(300, 50)               
    .css({
        "font-size": "30px",      
        "font-weight": "bold",    
        "background-color": "lightyellow", 
        "color": "black"          
        })
        .center().print().wait()
);

// 5. 練習題
newTrial("Practice",
    newText("info", "【練習：閱讀題】")
    .css("font-size", "25px")
    .css("margin-bottom", "2em")
    .print()
    .center(),
   
    newButton("start_read", "開始閱讀")
    .size(300, 50)               
    .css({
        "font-size": "25px",      
        "font-weight": "bold",    
        "background-color": "lightyellow", 
        "color": "black"          
        })
    .center().print().wait().remove()
    ,
    newText("PracSent", "【練習】這是姊姊親手製作的餅乾")
        .css({"font-size": "25px", "margin-bottom": "2em"})
        .print().center()
    ,
    newButton("confirm", "我讀完了")
        .size(300, 50)
        .css({"font-size": "25px", "font-weight": "bold", "background-color": "lightyellow"})
        .css("margin-bottom", "1em")
        .center().print()
        .wait().remove()
    ,
    getText("PracSent").remove(),
    getText("info").remove(),
    newTimer("buffer", 300).start().wait()
    ,
    newText("PracQuest", "問題：姊姊正在吃餅乾嗎？")
      .css({"font-size": "24px", "margin-bottom": "1em"})
      .print().center(),
    
    newScale("PracAns", "是", "否")
    
    .css({"font-size": "18px", "margin-bottom": "1em"})
        .settings.css("width", "200px")  
        .settings.css("max-width", "none") 
        .css("transform", "scale(1.5)")
        .labelsPosition("bottom")
        .print()
        .center()
        .wait()
);

// 6. 正式實驗
Template("material.csv", row =>
    newTrial("Experiment",
        newVar("RT").local(),
        ...(row.Modality === "Listen" ? [
            newText("prep_notice", "下一題是聽力題，請準備好再按下按鈕開始。")
                .css("font-size", "25px")
                .css("margin-bottom", "2em")
                .print()
                .center()
            ,
            newButton("start_audio", "開始播放")
            .size(300, 50)               
            .css({
                "font-size": "25px",      
                "background-color": "lightyellow", 
                "font-weight": "bold",
                "color": "black"          
            })
            .center()
            .print()
            .wait()        
            .remove()      
            ,
            getText("prep_notice").remove()
            ,
            newText("playing_msg", "【本題音檔播放中】")
                .css("font-size", "25px")
                .print()
                .center()
            ,
            newAudio("StimulusAudio", row.AudioFile)
                .play()
                .wait("first") 
            ,
            getText("playing_msg").remove()
        ] : [
            newText("info", "【閱讀題】") 
            .css("font-size", "25px")
            .css("margin-bottom", "2em")
            .print()
            .center(),
            newText("StimulusText", row.Sentence)
            .settings.css("font-size", "1.5em")
            .settings.css("line-height", "1.6")
            .settings.css("width", "100%")      
            .print()
            .center()
            ,
            newVar("StartTime").set( v => Date.now() ),
            newButton("read_done", "閱讀完畢，請點擊")
            .size(300, 50)               
            .css({
                   "font-size": "25px",      
                   "background-color": "lightyellow", 
                   "color": "black"          
                 })
            .center()
            .print()
            .wait() 
            .remove(),
            getVar("RT").set( v => Date.now() ).set( v => v - getVar("StartTime") ),
            getText("StimulusText").remove(),
            getText("info").remove()
        ])
        ,
        newTimer("sep", 300).start().wait(),
        newText("Quest", row.Question).print().center()
        .css({"font-size": "24px", "margin-bottom": "1em"})
        ,
        newScale("Answer", "是", "否")
        .labelsPosition("bottom")
        .css({"font-size": "18px", "margin-bottom": "1em"})
        .settings.css("width", "200px")  
        .settings.css("max-width", "none") 
        .css("transform", "scale(1.5)")
        .print()
        .center()
        .log()
        .wait()
)
    .log("Label",      row.ItemNo + "_" + row.Sentence + "_" + row.Modality + row.Complexity + "_" + row.group)
    .log("ReadingTime", getVar("RT")) 
    .log("ItemNo",     row.ItemNo)
    .log("Modality",   row.Modality)
    .log("Complexity", row.Complexity)
    .log("Condition",  row.Modality + "_" + row.Complexity)
    .log("Theme",      row.Theme)
    .log("Group",      row.group)
    .log("Correct",    row.Answer)
    .log("Age",        getVar("VAR_AGE"))
    .log("Native",     getVar("VAR_NATIVE"))
);

// 7. 傳送結果
SendResults("Send");

newTrial("Goodbye",
    newText("實驗結束，感謝您的參與！")
    .css("font-size", "26px")
    .print().center(),
    newButton().wait()
);