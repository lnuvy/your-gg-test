# your.gg 과제 제출



## 사용 라이브러리
| name                | Appliance               | version  |
| :-----------------: | :---------------------: | :------: |
| axios               | api 호출                 |0.27.2|
| @tanstack/react-query| Server State 관리       |4.6.1|
| @emotion/styled     | 컴포넌트 스타일링           |11.10.4|
| chart.js            | 티어 히스토리 시각화         |3.9.1|
| react-chartjs-2     | 티어 히스토리 시각화         |4.3.1|
| dayjs               | 날짜 라이브러리             |1.11.5|

<br>

## 배포 주소(미완료)
> http://your.gg-lnuvy-test.s3-website.ap-northeast-2.amazonaws.com


간단하게나마 AWS S3로 배포하려 했으나, 채택한 라이브러리 chart.js 와 next.js 내부 모듈간 호환성에 문제가 있다는 이슈를 발견했습니다.  
[깃허브 이슈글](https://github.com/chartjs/Chart.js/issues/10673)
<br><br>
이슈를 해결할 수 있는 방법을 모색해보고 배포가 된다면 README 를 수정해 놓겠습니다.

