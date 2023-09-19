package com.ssafy.donworry.domain.finance.repository.query;

import com.querydsl.core.Tuple;
import com.querydsl.jpa.impl.JPAQueryFactory;
import com.ssafy.donworry.domain.finance.entity.Consumption;
import com.ssafy.donworry.domain.finance.entity.ConsumptionCategory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.ssafy.donworry.domain.finance.entity.QConsumption.consumption;
import static com.ssafy.donworry.domain.finance.entity.QConsumptionCategory.consumptionCategory;


@Repository
@Slf4j
@RequiredArgsConstructor
public class ConsumptionQueryRepository {
    private final JPAQueryFactory jpaQueryFactory;

    public List<Tuple> findTotalByMemberId(Long memberId) {
        return jpaQueryFactory
                .select(consumption.consumptionCategory.consumptionCategoryName, consumption.consumptionPrice.sum())
                .from(consumption)
                .join(consumption.consumptionCategory, consumptionCategory)
                .groupBy(consumptionCategory.consumptionCategoryName)
                .where(consumption.member.id.eq(memberId))
                .fetch();

    }
}