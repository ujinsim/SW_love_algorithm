// 모달 컴포넌트
const ConfirmModal = ({ isOpen, onConfirm, onCancel, loading }) => {
  if (!isOpen) return null; // 모달이 열려 있지 않으면 렌더링하지 않음

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <p className="mb-4">이 유저를 선택하시겠습니까?</p>
        <div className="flex justify-end gap-4">
          <button
            onClick={onCancel}
            className="bg-gray-500 text-white px-4 py-2 rounded"
          >
            아니오
          </button>
          <button
            onClick={onConfirm}
            className="bg-blue-500 text-white px-4 py-2 rounded"
            disabled={loading} // 로딩 중이면 버튼 비활성화
          >
            {loading ? "처리 중..." : "네"}
          </button>
        </div>
      </div>
    </div>
  );
};

return (
  <div className="bg-gradient-to-b from-white via-purple-500 to-pink-500 min-h-screen w-full overflow-hidden flex items-center justify-center">
    {/* 유저 목록 */}
    <ul className="flex flex-wrap gap-12 w-full pt-4">
      {allUsers.map((user, index) => (
        <li
          key={user.id}
          className="cursor-pointer"
          onClick={() => handlePickUser(user.id)}
        >
          {/* 유저 정보 표시 */}
          {/* ... */}
        </li>
      ))}
    </ul>

    {/* 선택 확인 모달 */}
    <ConfirmModal
      isOpen={isModalOpen}
      onConfirm={handleConfirmPick}
      onCancel={handleCancelPick}
      loading={loading}
    />

    {/* 에러 메시지 */}
    {error && <p className="text-red-500">{error}</p>}
  </div>
);

export default ConfirmModal;
