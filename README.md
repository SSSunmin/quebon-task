# 쇼핑몰 개발 프로젝트
## 요구사항
- 공통헤더
  - 사이트 로고, 상품목록 페이지 이동 버튼 , 장바구니 페이지 이동 버튼
- 상품 목록페이지 구현
  - 구매 가능한 상품 목록 표시
- 상품 상세페이지 구현
  - 상품목록에서 상품 선택 시 해당 상품의 상세페이지로 이동
- 장바구니 페이지 구현
  - 현재 장바구니에 담겨진 상품 목록 관리
  - 각 상품별 상품명, 수량, 단가, 총액 표시
  - 상품의 수량 조절 및 상품 삭제 기능
  - 결제하기 기능
- 반응형 디자인
  
## 실행방법
development server 실행:

```bash
npm run dev
```
[http://localhost:3000](http://localhost:3000)으로 접속

## 기술스택
- Next.js 13, TypeScript, recoil, Emotion

## 사이트 미리보기
### 홈화면
![image](https://github.com/SSSunmin/shoppingmall-project/assets/100817586/f8f7dd5f-b269-477f-a64f-ee00ce8449bd)
### 상품 목록페이지 
![image](https://github.com/SSSunmin/shoppingmall-project/assets/100817586/0315aa81-c97d-4c89-bcee-0993f62bb576)
### 상품 상세페이지 
![image](https://github.com/SSSunmin/shoppingmall-project/assets/100817586/ecde8c9d-29c4-4600-97d1-03723cc82386)
### 장바구니 페이지 
![image](https://github.com/SSSunmin/shoppingmall-project/assets/100817586/aee30726-f31e-48e2-b604-ee6d3c1045c0)
### 결제팝업
![image](https://github.com/SSSunmin/shoppingmall-project/assets/100817586/2a6db9ae-353c-4b48-a8e3-19dd6dfa1d89)


### 구현사항
- 공통 헤더
  - 각 버튼 클릭 시 해당 페이지로 이동
  - 장바구니 아이콘 위에 실시간으로 담긴 물품 갯수 표시
  - 새로고침 시에도 장바구니 데이터 유지
- 상품 목록페이지
  - Fake Store API로 전체상품 목록 불러오기
  - 상품 클릭 시 해당 상품 상세 페이지로 이동
- 상품 상세페이지
  - Fake Store API로 선택한 상품 데이터 불러오기
  - 수량을 조절하고 장바구니 추가 버튼 클릭 시 해당 수량 만큼 장바구니 목록에 상품 추가
- 장바구니 페이지
  - 장바구니에 담긴 물품 리스트 표시
  - 각 상품별 수량 조절 및 삭제
  - 선택한 상품 구입 기능
  - 결제진행 시 결제 내용 팝업 표시 및 해당 상품 장바구니 제거
- 반응형 디자인
  - MediaQuery를 이용한 반응형 디자인 구현
