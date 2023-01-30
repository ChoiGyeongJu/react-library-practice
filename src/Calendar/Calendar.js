import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ko from 'date-fns/locale/ko';
import styled from 'styled-components';

const Calendar = () => {
	const [startDate, setStartDate] = useState(null);
	const [endDate, setEndDate] = useState(null);

	return (
		<div>
			<h2>프로젝트 기간</h2>
			<Section>
				<SectionTitle>시작일:</SectionTitle>
				<CDatePikcer
					selected={startDate}
					onChange={date => setStartDate(date)}
					dateFormat="yyyy년 MM월 dd일"
					selectsStart
					startDate={startDate}
					endDate={endDate}
					locale={ko}
					placeholderText="시작 날짜를 선택해주세요."
				/>
			</Section>
			<Section>
				<SectionTitle>종료일:</SectionTitle>
				<CDatePikcer
					selected={endDate}
					onChange={date => setEndDate(date)}
					dateFormat="yyyy년 MM월 dd일"
					selectsEnd
					startDate={startDate}
					endDate={endDate}
					minDate={startDate}
					locale={ko}
					placeholderText="종료 날짜를 선택해주세요."
				/>
			</Section>
			{startDate && endDate ? (
				<Result>
					<p>
						프로젝트 기간은{' '}
						{startDate.toLocaleDateString('ko-KR', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
						부터{' '}
						{endDate.toLocaleDateString('ko-KR', {
							year: 'numeric',
							month: 'long',
							day: 'numeric',
						})}
						까지 입니다.
					</p>
				</Result>
			) : null}
		</div>
	);
};

export default Calendar;

const CDatePikcer = styled(DatePicker)`
	padding: 5px 5px 5px 10px;
	border-radius: 8px;
	font-size: 12px;
`;

const Section = styled.div`
	display: flex;
	margin-bottom: 15px;
`;

const SectionTitle = styled.span`
	width: 60px;
	display: flex;
`;

const Result = styled.div`
	margin-top: 30px;
`;
