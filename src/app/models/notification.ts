export enum NotificationType {
    Error = "Error",
    Warning = "Warning",
    Success = "Success"
}

export interface INotification {
    message: string;
    type: NotificationType;
}