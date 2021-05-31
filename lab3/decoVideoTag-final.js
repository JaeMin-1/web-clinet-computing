function decoVideoTag (videoTagId) {

    let templateTag = `
        <span>
            영상선택 : 
            <label id="sel-${videoTagId}" for="file-${videoTagId}"> 
            </label> 
        </span> 
        <br>
        <input type="file" name="file-${videoTagId}" id="file-${videoTagId}" value="file" onchange="document.getElementById('sel-${videoTagId}').innerHTML = this.files[0].name + '이 선택되었습니다.'; document.getElementById('${videoTagId}').src=this.files[0].name;"/>
        <input type="button" value="영상보기" onclick="document.getElementById('${videoTagId}').play();"/>
        <input type="button" value="영상중단" onclick="document.getElementById('${videoTagId}').pause();"/>
        <br>`;

    let $videoTag = document.getElementById(`${videoTagId}`);

    $videoTag.insertAdjacentHTML('beforebegin', templateTag);
}