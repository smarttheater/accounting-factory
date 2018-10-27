import { IExtendId } from '../autoGenerated';
import { IReservation } from '../reservation/event';
import * as TaskFactory from '../task';
import * as TaskExecutionResult from '../taskExecutionResult';
import TaskName from '../taskName';
import TaskStatus from '../taskStatus';

export interface IData {
    reservation: IReservation;
}
export interface IAttributes extends TaskFactory.IAttributes {
    data: IData;
}
/**
 * 予約から注文レポート更新タスクインターフェース
 */
export type ITask = IExtendId<IAttributes>;
export function createAttributes(params: {
    status: TaskStatus;
    runsAt: Date;
    remainingNumberOfTries: number;
    lastTriedAt: Date | null;
    numberOfTried: number;
    executionResults: TaskExecutionResult.ITaskExecutionResult[];
    data: IData;
}): IAttributes {
    return TaskFactory.createAttributes({ ...params, ...{ name: TaskName.UpdateOrderReportByReservation } });
}