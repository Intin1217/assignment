## 사용 기술 스택
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

![React](https://img.shields.io/badge/zustand-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white) ![React](https://img.shields.io/badge/reacticon-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![React](https://img.shields.io/badge/reactrnd-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)

![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white) ![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)

## 과제 해결 방식
### 사전 작업
공통 레이아웃 컴포넌트 작성 https://github.com/Intin1217/elice_assignment/tree/master/src/styles/commonStyle

공용 컴포넌트 작성 https://github.com/Intin1217/elice_assignment/tree/master/src/components/common

### 기능 구현
- 1번 요구 사항: onMouseEnter 속성을 이용하여 Hover시 모달이 열리게 구현 (1)

  
![image](https://github.com/user-attachments/assets/96a9fdf1-aa6a-4717-a843-f693d1251761)

- 2번 요구 사항: 드래그 관련 함수 작성 뒤 WordBlock 컴포넌트에 Props로 전달 해 Div 태그 속성인 draggable, onDragStart로 구현 (2)

![image](https://github.com/user-attachments/assets/aea1ef59-4718-4d58-a811-dbe36e1f544b)

- 3번 요구 사항 (3A, 3B, 3C)
1. 현재 드래그중인 단어가 존재하는지 필터링
2.  `const acceptWord = answer[boxIndex];`로 현재 박스에 허용되는 정답 단어를 할당
3.  유효하다면 `const newSelectedWords = [...selectedWords];` 선택된 단어 배열을 복사 유효하지 않을 경우 단어가 박스에 추가되지 않음
4.  복사한 배열의 현재 박스 Index 위치에 드래그 된 단어를 할당 `newSelectedWords[boxIndex] = draggedWord;`
5.  `setSelectedWords(newSelectedWords);`로 선택 된 배열을 업데이트 후 현재 드래그 중인 단어를 초기화 합니다.
6.  제출 버튼을 누르면 프롬프트가 AI 모델로 전송

[https://github.com/Intin1217/elice_assignment/blob/master/src/components/domain/DirectivePage/ImageSelectModal.tsx](https://github.com/Intin1217/elice_assignment/blob/master/src/components/domain/DirectivePage/ImageSelectModal.tsx)
   
[https://github.com/Intin1217/elice_assignment/blob/master/src/utils/fetchImage.ts](https://github.com/Intin1217/elice_assignment/blob/master/src/utils/fetchImage.ts)

![image](https://github.com/user-attachments/assets/0c9632e1-49af-4f1d-b2b5-667288c12a0d) 

![image](https://github.com/user-attachments/assets/bb054d0e-b488-406c-ad5e-86772680ff72)

- 4, 5, 6번 요구 사항 (2A, 3A, 2B, 3B, 2C, 3C)
1. 유저 상호작용 여부를 판별하기 위한 전역 상태 작성 https://github.com/Intin1217/elice_assignment/blob/master/src/store/userAfkStore.ts

2. 10초간 상호 작용이 없을 경우 isAfk의 상태를 변경
![image](https://github.com/user-attachments/assets/aa55ad3c-a67b-45ec-9bd5-54b992add953)

3.
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/05ecd10e-6706-452c-8b41-4e77797b639c" width="500"/>
      <p align="center">Styled-component를 사용해 blink 속성으로 true가 전달 될 시 애니메이션 적용</p>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/2c61418f-5447-4b04-9061-62b2165c7fda" width="300"/>
      <p align="center">정답 배열과 선택된 배열의 요소가 같으면 `blink={false}` 전달하여 정답이 입력되어있지 않은 필드의 경우만 깜박이게 구현</p>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/fe387a6f-2d22-4053-af31-0c36ccc01150" width="300"/>
      <p align="center">`isAfk = true`이고 some() 내부에 있는 조건을 만족하면 true를 반환 이후 isBlink를 blink 속성에 전달</p>
    </td>
  </tr>
</table>

4. 모든 정답이 일치하면 제출 버튼 활성화

- 7, 8, 9번 요구사항 (AI 이미지 선택, 드래그, 이미지 리사이징, 초기화)
1. 제출 버튼을 누르면 AI 이미지 선택 모달이 활성화
2. 모달이 보이게 되면 API 통신을 통해 이미지 로딩
![image](https://github.com/user-attachments/assets/0550a8d2-38a9-4ebd-8531-a3f1402ccd67)
3. 선택된 이미지를 저장하기 위해 https://github.com/Intin1217/elice_assignment/blob/master/src/store/selectImageStore.ts 상태 생성

4.
<table>
  <tr>
    <td>
      <img src="https://github.com/user-attachments/assets/5c65f68b-d8af-4d58-af70-e457e5f8cf68" width="300"/>
      <p align="center">선택된 이미지가 있을 경우 DragSelectedImage 컴포넌트를 렌더링</p>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/392847fa-e98a-4634-8aaf-d01a65c94f07" width="500"/>
      <p align="center">containerRef를 통해 이미지를 배치할 부모 Div를 참조, useEffect내에서 계산을 통해 컴포넌트 마운트 시 초기 위치를 가운데로 정렬, isInitialized 상태를 통해 위치 계산이 완료 된 후 이미지가 보이게 구현</p>
    </td>
    <td>
      <img src="https://github.com/user-attachments/assets/1ddf8ed2-8766-4af0-832d-0f652b71d938" width="500"/>
      <p align="center">React-Rnd라이브러리를 사용해 원하는 위치에 이미지를 드래그 및 리사이징 기능 구현</p>
    </td>
  </tr>
</table>

5. 이후 다시하기 버튼이 활성화되며 다시하기를 누를 시 단어 선택부분으로 돌아가게 구현

## 사용성 개선
- 개요 페이지 스타일이 딱딱하다는 느낌을 받아 수정하였습니다
- 이미지 선택 모달에서 API 호출이 완료 되기전에 로딩 이미지를 추가하였습니다
- 학생이 이미지가 마음에 드는게 없을 경우 이미지를 다시 불러 올 수 있는 기능을 추가하였습니다
